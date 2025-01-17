import { ReactElement } from 'react';
import styles from './index.module.scss';
import ListItem from '@/components/shares/listItem';
import { AWARD } from '@/const/awards';
import SectionLayout from '@/layouts/section';
import { FadeIn } from '@/components/shares/fadein';

const AwardsSection = (): ReactElement => {
  return (
    <SectionLayout title="Awards" center>
      <ul className={styles.award}>
        {AWARD.map((award) => (
          <FadeIn key={award.title} direction='left'>
            <ListItem {...award} />
          </FadeIn>
        ))}
      </ul>
    </SectionLayout>
  );
};

export default AwardsSection;
