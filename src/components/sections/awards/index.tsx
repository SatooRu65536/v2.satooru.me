import { ReactElement } from 'react';

import styles from './index.module.scss';

import ListItem from '@/components/shares/listitem';
import { AWARD } from '@/const/awards';
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
