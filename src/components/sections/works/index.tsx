import { ReactElement } from 'react';

import styles from './index.module.scss';

import ListItem from '@/components/shares/listItem';
import { WORKS } from '@/const/works';
import SectionLayout from '@/layouts/section';
import { FadeIn, FadeInWithStagger } from '@/components/shares/fadein';

const WorksSection = (): ReactElement => {
  return (
    <SectionLayout title="Works" center>
      <FadeInWithStagger>
        <ul className={styles.works}>
          {WORKS.map((work) => (
            <FadeIn key={work.title} direction='left'>
              <ListItem {...work} />
            </FadeIn>
          ))}
        </ul>
      </FadeInWithStagger>
    </SectionLayout>
  );
};

export default WorksSection;
