import { ReactElement } from 'react';

import styles from './index.module.scss';

import { SKILLS } from '@/const/skills';
import IconCard from '@/elements/iconCard';
import SectionLayout from '@/layouts/section';

const SkillsSection = (): ReactElement => {
  return (
    <SectionLayout title="Skills" align="center">
      <div className={styles.grid}>
        {SKILLS.map((name) => (
          <IconCard key={name} iconKey={name} size="lg" />
        ))}
      </div>
    </SectionLayout>
  );
};

export default SkillsSection;
