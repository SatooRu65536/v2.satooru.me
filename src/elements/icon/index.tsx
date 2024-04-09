import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiC,
  SiCloudflare,
  SiCss3,
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
  SiRubyonrails,
  SiSass,
  SiStorybook,
  SiSvelte,
  SiTypescript,
  SiX,
} from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

export const IconMap = {
  aftereffects: { name: 'After Effects', icon: SiAdobeaftereffects },
  illustrator: { name: 'Illustrator', icon: SiAdobeillustrator },
  c: { name: 'C言語', icon: SiC },
  cloudflare: { name: 'Cloudflare', icon: SiCloudflare },
  css: { name: 'CSS', icon: SiCss3 },
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
  scss: { name: 'SCSS', icon: SiSass },
  storybook: { name: 'Storybook', icon: SiStorybook },
  svelte: { name: 'Svelte', icon: SiSvelte },
  typescript: { name: 'TypeScript', icon: SiTypescript },
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

  return (
    <SelectedIcon {...rest} color={SelectedColot} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
  );
};

export default Icon;
