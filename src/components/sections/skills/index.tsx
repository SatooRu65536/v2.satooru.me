import { ReactElement } from 'react';

import styles from './index.module.scss';

import { IconKey } from '@/elements/icon';
import IconCard from '@/elements/iconCard';
import SectionLayout from '@/layouts/section';

const SKILLS: IconKey[] = [
  'html',
  'css',
  'scss',
  'javascript',
  'typescript',
  'react',
  'nextjs',
  'svelte',
  'recoil',
  'vite',
  'tauri',
  'electron',
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
  'docker',
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
          <IconCard key={name} iconKey={name} size="lg" />
        ))}
      </div>
    </SectionLayout>
  );
};

export default SkillsSection;
