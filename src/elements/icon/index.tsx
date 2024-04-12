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
} from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

export const IconMap = {
  aftereffects: { name: 'After Effects', icon: SiAdobeaftereffects },
  illustrator: { name: 'Illustrator', icon: SiAdobeillustrator },
  c: { name: 'C言語', icon: SiC },
  cloudflare: { name: 'Cloudflare', icon: SiCloudflare },
  css: { name: 'CSS', icon: SiCss3 },
  docker: { name: 'Docker', icon: SiDocker },
  electron: { name: 'Electron', icon: SiElectron },
  firebase: { name: 'Firebase', icon: SiFirebase },
  github: { name: 'GitHub', icon: SiGithub },
  hono: { name: 'Hono', icon: SiHono },
  html: { name: 'HTML', icon: SiHtml5 },
  javascript: { name: 'JavaScript', icon: SiJavascript },
  mysql: { name: 'MySQL', icon: SiMysql },
  nestjs: { name: 'Nestjs', icon: SiNestjs },
  nextjs: { name: 'Next.js', icon: SiNextdotjs },
  nodejs: { name: 'Node.js', icon: SiNodedotjs },
  prisma: { name: 'Prisma', icon: SiPrisma },
  python: { name: 'Python', icon: SiPython },
  raspberrypi: { name: 'Raspberry Pi', icon: SiRaspberrypi },
  react: { name: 'React', icon: SiReact },
  rails: { name: 'Ruby on Rails', icon: SiRubyonrails },
  recoil: { name: 'Recoil', icon: SiRecoil },
  scss: { name: 'SCSS', icon: SiSass },
  storybook: { name: 'Storybook', icon: SiStorybook },
  svelte: { name: 'Svelte', icon: SiSvelte },
  tauri: { name: 'Tauri', icon: SiTauri },
  typescript: { name: 'TypeScript', icon: SiTypescript },
  vite: { name: 'Vite', icon: SiVite },
  x: { name: 'X', icon: SiX },
} as const;

export type IconKey = keyof typeof IconMap;

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
