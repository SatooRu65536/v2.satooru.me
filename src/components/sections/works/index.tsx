import type { ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/fadein';
import ListItem from '@/components/shares/listItem';
import { WORKS } from '@/const/works';
import SectionLayout from '@/layouts/section';
import { hash } from 'ohash';
import styles from './index.module.scss';

function WorksSection(): ReactElement {
  return (
    <SectionLayout center title="Works">
      <FadeInWithStagger>
        <ul className={styles.works}>
          {WORKS.map((work) => (
            <FadeIn direction="left" key={hash(work)}>
              <ListItem {...work} />
            </FadeIn>
          ))}
        </ul>
      </FadeInWithStagger>
    </SectionLayout>
  );
}

export default WorksSection;
