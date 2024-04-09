import { ReactElement } from 'react';

import styles from './index.module.scss';

import Icon, { IconName } from '@/elements/icon';
import SectionLayout from '@/layouts/section';

const SKILLS: IconName[] = [
  'html',
  'css',
  'scss',
  'javascript',
  'typescript',
  'react',
  'nextjs',
  'svelte',
  'storybook',
  'nodejs',
  'hono',
  'nestjs',
  'rails',
  'mysql',
  'prisma',
  'python',
  'c',
  'firebase',
  'cloudflare',
  'github',
  'raspberrypi',
  'illustrator',
  'aftereffects',
];

const SkillsSection = (): ReactElement => {
  return (
    <SectionLayout title="Skills" align="center">
      <div className={styles.grid}>
        {SKILLS.map((name) => (
          <Icon key={name} name={name} size="lg" />
        ))}
      </div>
    </SectionLayout>
  );
};

export default SkillsSection;
