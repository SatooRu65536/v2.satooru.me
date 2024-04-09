import { ReactElement } from 'react';

import aftereffects from './icons/aftereffects';
import c from './icons/c';
import css from './icons/css';
import cloudflare from './icons/cloudflare';
import firebase from './icons/firebase';
import github from './icons/github';
import hono from './icons/hono';
import html from './icons/html';
import illustrator from './icons/illustrator';
import javascript from './icons/javascript';
import mysql from './icons/mysql';
import nestjs from './icons/nestjs';
import nextjs from './icons/nextjs';
import nodejs from './icons/nodejs';
import prisma from './icons/prisma';
import python from './icons/python';
import rails from './icons/rails';
import raspberrypi from './icons/raspberrypi';
import react from './icons/react';
import scss from './icons/scss';
import storybook from './icons/storybook';
import svelte from './icons/svelte';
import typescript from './icons/typescript';
import styles from './index.module.scss';

const Icons = {
  aftereffects,
  c,
  css,
  cloudflare,
  firebase,
  github,
  hono,
  html,
  illustrator,
  javascript,
  mysql,
  nestjs,
  nextjs,
  nodejs,
  prisma,
  python,
  rails,
  raspberrypi,
  react,
  scss,
  storybook,
  svelte,
  typescript,
} as const;

export type IconName = keyof typeof Icons;

interface Props {
  name: keyof typeof Icons;
  size?: 'sm' | 'lg';
  color?: string;
}

const Icon = (props: Props): ReactElement => {
  const { name, size, color } = props;
  const SelectedIcon = Icons[name].icon;
  const selectedIconName = Icons[name].name;

  const iconSize = size === 'lg' ? 48 : 24;
  const iconColor = color ?? 'default';

  return (
    <div className={styles.icon}>
      <SelectedIcon size={iconSize} color={iconColor} />
      <p>{selectedIconName}</p>
    </div>
  );
};

export default Icon;
