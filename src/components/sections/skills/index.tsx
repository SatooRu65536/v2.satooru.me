import { ReactElement } from 'react';

import styles from './index.module.scss';

import IconCard from '@/components/shares/iconCard';
import { SKILLS } from '@/const/skills';
import SectionLayout from '@/layouts/section';

const SkillsSection = (): ReactElement => {
  return (
    <SectionLayout title="Skills">
      <div className={styles.grid}>
        {SKILLS.map((name) => (
          <IconCard key={name} iconKey={name} size="lg" />
        ))}
      </div>
    </SectionLayout>
  );
};

export default SkillsSection;
