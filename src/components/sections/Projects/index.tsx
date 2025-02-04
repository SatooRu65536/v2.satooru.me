'use client';

import type { ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/Fadein';

import Loading from '@/components/shares/Loading';
import SectionLayout from '@/layouts/section';

import { projectsAtomLoadable } from '@/store/projectsAtom';
import { useAtomValue } from 'jotai';
import ProjectCard from './Card';
import styles from './index.module.scss';

function ProjectsSection(): ReactElement {
  const projects = useAtomValue(projectsAtomLoadable);

  return (
    <SectionLayout className={styles.projects} title="Active Projects">
      {projects.state === 'loading'
        ? (
            <Loading />
          )
        : projects.state === 'hasError'
          ? (
              <p>Error</p>
            )
          : (
              <FadeInWithStagger className={styles.fade_wrapper}>
                {projects.data.map((project) => (
                  <FadeIn className={styles.fade} key={project.name}>
                    <ProjectCard
                      description={project.summary}
                      repository={project.repository}
                      site={project.site}
                      techs={project.tags}
                      title={project.name}
                    />
                  </FadeIn>
                ))}
              </FadeInWithStagger>
            )}
    </SectionLayout>
  );
}

export default ProjectsSection;
