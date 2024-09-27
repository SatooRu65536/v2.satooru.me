import dayjs from 'dayjs';

import { IconKey, IconMap } from '@/components/shares/icon';
import { getKeys } from '@/utils';

interface GitHubEvent {
  repo: {
    url: string;
  };
}

interface GitHubRepo {
  name: string;
  description: string;
  topics: string[];
  pushed_at: string;
  language: string;
  html_url: string;
  homepage: string;
}

export interface Project {
  name: string;
  summary: string;
  tags: IconKey[];
  repository: string;
  site: string | undefined;
  updatedAt: string;
}

export const fetchMyProjects = async () => {
  const eventsUrl = process.env.GITHUB_EVENTS_URL;

  if (eventsUrl === undefined) {
    throw new Error('GITHUB_API_URL is not defined');
  }

  const repoUrls: string[] = await fetch(eventsUrl)
    .then((res) => res.json() as Promise<GitHubEvent[]>)
    .then((events) => events.map((event) => event.repo.url))
    .catch(() => []);

  const uniqueRepoUrls = Array.from(new Set(repoUrls));

  const projects: Project[] = (
    await Promise.all(
      uniqueRepoUrls.map((url) =>
        fetch(url)
          .then((res) => res.json() as Promise<GitHubRepo>)
          .then((repo) => {
            const tags = repo.topics.map((t) => t.toLowerCase());
            const iconKeys: IconKey[] = getKeys(IconMap);

            const matchedTags = tags.filter((tag) => iconKeys.includes(tag as IconKey)) as IconKey[];

            const { name } = repo;
            const summary = repo.description;
            const repository = repo.html_url;
            const site = repo.homepage;
            const updatedAt = repo.pushed_at;
            return { name, summary, tags: matchedTags, repository, site, updatedAt };
          })
          .catch(() => undefined),
      ),
    )
  ).filter((r) => r !== undefined);

  const filteredProjects = projects.filter((p) => dayjs(p.updatedAt).isAfter(dayjs().subtract(2, 'week')));
  const uniqueProjects = filteredProjects.filter((p, i, self) => self.findIndex((s) => s.name === p.name) === i);
  return uniqueProjects;
};
