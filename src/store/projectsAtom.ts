import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

import { Project } from '@/fetcher/myprojects';

const fetchProjects = async () => {
  const filteredProjects = await fetch('/api/projects')
    .then((res) => res.json())
    .then((projects: Project[]) => projects);
  return filteredProjects;
};

const projectsAtom = atom(async () => await fetchProjects());
export const projectsAtomLoadable = loadable(projectsAtom);
