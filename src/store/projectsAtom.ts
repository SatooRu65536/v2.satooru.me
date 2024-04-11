import dayjs, { Dayjs } from 'dayjs';
import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

import { IconKey, IconMap } from '@/elements/icon';
import { getKeys } from '@/utils';

interface GitHubRepo {
  name: string;
  description: string;
  topics: string[];
  pushed_at: string;
  language: string;
  html_url: string;
  homepage: string;
}

type GetGitHubRepos = GitHubRepo[];

export interface Project {
  name: string;
  summary: string;
  tags: IconKey[];
  repository: string;
  site: string | undefined;
  updatedAt: Dayjs;
}

const fetchProjects = async () => {
  const url = process.env.NEXT_PUBLIC_GITHUB_REPOS_URL;

  if (url === undefined) {
    throw new Error('GITHUB_API_URL is not defined');
  }

  const projects = await fetch(url)
    .then((res) => res.json() as Promise<GetGitHubRepos>)
    .then((repos) => {
      const projects: Project[] = repos.map((repo) => {
        const tags = repo.topics.map((t) => t.toLowerCase());
        const iconKeys: IconKey[] = getKeys(IconMap);

        const matchedTags = tags.filter((tag) => iconKeys.includes(tag as IconKey)) as IconKey[];

        const { name } = repo;
        const summary = repo.description;
        const repository = repo.html_url;
        const site = repo.homepage;
        const updatedAt = dayjs(repo.pushed_at);
        return { name, summary, tags: matchedTags, repository, site, updatedAt };
      });

      return projects;
    })
    .catch((err) => {
      console.error(err);
      const projects: Project[] = [];
      return projects;
    });

  const filteredProjects = projects.filter((project) => project.updatedAt.isAfter(dayjs().subtract(2, 'week')));
  return filteredProjects;
};

const projectsAtom = atom(async () => await fetchProjects());
export const projectsAtomLoadable = loadable(projectsAtom);
