'use client';

import { useAtomValue } from 'jotai';
import { ReactElement } from 'react';

import ProjectCard from './card';
import styles from './index.module.scss';

import Loading from '@/components/shares/loading';
import SectionLayout from '@/layouts/section';
import { projectsAtomLoadable } from '@/store/projectsAtom';
import { FadeIn, FadeInWithStagger } from '@/components/shares/fadein';

const ProjectsSection = (): ReactElement => {
  const projects = useAtomValue(projectsAtomLoadable);

  return (
    <SectionLayout title="Active Projects" className={styles.projects}>
      {projects.state === 'loading' ? (
        <Loading />
      ) : projects.state === 'hasError' ? (
        <p>Error</p>
      ) : (
        <FadeInWithStagger className={styles.fade_wrapper}>
          {projects.data.map((project) => (
            <FadeIn key={project.name} className={styles.fade}>
              <ProjectCard
                title={project.name}
                description={project.summary}
                techs={project.tags}
                repository={project.repository}
                site={project.site}
              />
            </FadeIn>
          ))}
        </FadeInWithStagger>
      )}
    </SectionLayout>
  );
};

export default ProjectsSection;
