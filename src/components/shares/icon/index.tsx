import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiC,
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiElectron,
  SiFirebase,
  SiGithub,
  SiHono,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRecoil,
  SiRubyonrails,
  SiSass,
  SiStorybook,
  SiSvelte,
  SiTauri,
  SiTypescript,
  SiVite,
  SiX,
  SiMantine,
  SiJest,
  SiPrettier,
  SiEslint,
  SiStyledcomponents,
  SiDrizzle,
  SiPlaywright,
  SiVitest,
  SiGit,
} from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

export const IconMap = {
  aftereffects: { name: 'After Effects', icon: SiAdobeaftereffects },
  illustrator: { name: 'Illustrator', icon: SiAdobeillustrator },
  c: { name: 'C言語', icon: SiC },
  cloudflare: { name: 'Cloudflare', icon: SiCloudflare },
  css: { name: 'CSS', icon: SiCss3 },
  docker: { name: 'Docker', icon: SiDocker },
  'drizzle-orm': { name: 'Drizzle ORM', icon: SiDrizzle },
  electron: { name: 'Electron', icon: SiElectron },
  eslint: { name: 'ESLint', icon: SiEslint },
  firebase: { name: 'Firebase', icon: SiFirebase },
  git: { name: 'Git', icon: SiGit },
  github: { name: 'GitHub', icon: SiGithub },
  hono: { name: 'Hono', icon: SiHono },
  html: { name: 'HTML', icon: SiHtml5 },
  javascript: { name: 'JavaScript', icon: SiJavascript },
  jest: { name: 'Jest', icon: SiJest },
  mantine: { name: 'Mantine', icon: SiMantine },
  mysql: { name: 'MySQL', icon: SiMysql },
  nestjs: { name: 'Nestjs', icon: SiNestjs },
  nextjs: { name: 'Next.js', icon: SiNextdotjs },
  node: { name: 'Node.js', icon: SiNodedotjs },
  playwright: { name: 'Playwright', icon: SiPlaywright },
  prisma: { name: 'Prisma', icon: SiPrisma },
  python: { name: 'Python', icon: SiPython },
  python3: { name: 'Python', icon: SiPython },
  prettier: { name: 'Prettier', icon: SiPrettier },
  raspberrypi: { name: 'Raspberry Pi', icon: SiRaspberrypi },
  react: { name: 'React', icon: SiReact },
  rails: { name: 'Ruby on Rails', icon: SiRubyonrails },
  recoil: { name: 'Recoil', icon: SiRecoil },
  scss: { name: 'SCSS', icon: SiSass },
  'styled-components': { name: 'styled-components', icon: SiStyledcomponents },
  storybook: { name: 'Storybook', icon: SiStorybook },
  svelte: { name: 'Svelte', icon: SiSvelte },
  tauri: { name: 'Tauri', icon: SiTauri },
  typescript: { name: 'TypeScript', icon: SiTypescript },
  vite: { name: 'Vite', icon: SiVite },
  vitest: { name: 'Vitest', icon: SiVitest },
  x: { name: 'X', icon: SiX },
} as const;

export type IconKey = keyof typeof IconMap;

/**
 * IconKey に含まれるキーかどうかを判定
 */
const isIconKeys = (keys: string[]): keys is IconKey[] => keys.every((key) => key in IconMap);

/**
 * IconKey に含まれるキーのみを返す
 */
export const filterIconKeys = (keys: string[]): IconKey[] => {
  const iconKeys = keys.filter((key) => key in IconMap);
  if (isIconKeys(iconKeys)) return iconKeys;
  return [];
};

interface Props {
  iconKey: IconKey;
  color?: string;
  className?: string;
  size?: number;
}

const Icon = (props: Props): ReactElement => {
  const { iconKey, color, ...rest } = props;
  const SelectedIcon = IconMap[iconKey].icon;
  const SelectedColot = color ?? 'default';

  return <SelectedIcon {...rest} color={SelectedColot} />;
};

export default Icon;
