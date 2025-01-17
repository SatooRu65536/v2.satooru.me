import type { Project } from '@/fetcher/myprojects';
import { atom } from 'jotai';

import { loadable } from 'jotai/utils';

async function fetchProjects() {
  const filteredProjects = await fetch('/api/projects')
    .then((res) => res.json())
    .then((projects: Project[]) => projects);
  return filteredProjects;
}

const projectsAtom = atom(async () => await fetchProjects());
export const projectsAtomLoadable = loadable(projectsAtom);
