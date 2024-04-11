import { ReactElement } from 'react';

import styles from './index.module.scss';

import { WORKS } from '@/const/works';
import ListItem from '@/elements/listITem';
import SectionLayout from '@/layouts/section';

const WorksSection = (): ReactElement => {
  return (
    <SectionLayout title="Works">
      <ul className={styles.works}>
        {WORKS.map((work) => (
          <ListItem key={work.title} {...work} />
        ))}
      </ul>
    </SectionLayout>
  );
};

export default WorksSection;
