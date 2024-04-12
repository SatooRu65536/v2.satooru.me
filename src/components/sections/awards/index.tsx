import { ReactElement } from 'react';

import styles from './index.module.scss';

import { AWARD } from '@/const/awards';
import ListItem from '@/elements/listITem';
import SectionLayout from '@/layouts/section';

const AwardsSection = (): ReactElement => {
  return (
    <SectionLayout title="Awards" leftSpace>
      <ul className={styles.award}>
        {AWARD.map((award) => (
          <ListItem key={award.title} {...award} />
        ))}
      </ul>
    </SectionLayout>
  );
};

export default AwardsSection;
