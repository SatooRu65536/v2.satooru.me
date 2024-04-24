import { ReactElement } from 'react';

import styles from './index.module.scss';

import ListItem from '@/components/shares/listitem';
import { WORKS } from '@/const/works';
import SectionLayout from '@/layouts/section';

const WorksSection = (): ReactElement => {
  return (
    <SectionLayout title="Works" leftSpace>
      <ul className={styles.works}>
        {WORKS.map((work) => (
          <ListItem key={work.title} {...work} />
        ))}
      </ul>
    </SectionLayout>
  );
};

export default WorksSection;
