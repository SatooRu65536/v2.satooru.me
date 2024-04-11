import { ReactElement } from 'react';

import ProjectCard from './card';
import styles from './index.module.scss';

import SectionLayout from '@/layouts/section';

const ProjectsSection = (): ReactElement => {
  return (
    <SectionLayout title="Active Projects" className={styles.projects}>
      <ProjectCard title={''} description={''} techs={[]} repository={''} />
    </SectionLayout>
  );
};

export default ProjectsSection;
