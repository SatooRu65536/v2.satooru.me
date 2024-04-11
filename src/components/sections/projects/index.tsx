'use client';

import { useAtomValue } from 'jotai';
import { ReactElement } from 'react';

import ProjectCard from './card';
import styles from './index.module.scss';

import SectionLayout from '@/layouts/section';
import { projectsAtomLoadable } from '@/store/projectsAtom';

const ProjectsSection = (): ReactElement => {
  const projects = useAtomValue(projectsAtomLoadable);

  return (
    <SectionLayout title="Active Projects" className={styles.projects}>
      {projects.state === 'hasData' &&
        projects.data.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.summary}
            techs={project.tags}
            repository={project.repository}
            site={project.site}
          />
        ))}
    </SectionLayout>
  );
};

export default ProjectsSection;
