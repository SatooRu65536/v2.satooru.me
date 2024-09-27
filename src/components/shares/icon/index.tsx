import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiBiome,
  SiC,
  SiCloudflare,
  SiCloudflarepages,
  SiCloudflareworkers,
  SiCss3,
  SiDocker,
  SiElectron,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiHono,
  SiHtml5,
  SiJavascript,
  SiJupyter,
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
  SiSupabase,
  SiSvelte,
  SiTauri,
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiX,
  SiMantine,
  SiNumpy,
  SiJest,
  SiPrettier,
  SiPandas,
  SiEslint,
  SiStyledcomponents,
  SiDrizzle,
  // SiPlaywright,
  SiVitest,
  SiGit,
  SiPostgresql,
  SiFastapi,
  SiTrpc,
} from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

export const IconMap = {
  aftereffects: { name: 'After Effects', icon: SiAdobeaftereffects },
  biome: { name: 'Biome', icon: SiBiome },
  c: { name: 'C言語', icon: SiC },
  cloudflare: { name: 'Cloudflare', icon: SiCloudflare },
  'cloudflare-pages': { name: 'Cloudflare Pages', icon: SiCloudflarepages },
  'cloudflare-workers': { name: 'Cloudflare Workers', icon: SiCloudflareworkers },
  css: { name: 'CSS', icon: SiCss3 },
  docker: { name: 'Docker', icon: SiDocker },
  'drizzle-orm': { name: 'Drizzle ORM', icon: SiDrizzle },
  electron: { name: 'Electron', icon: SiElectron },
  eslint: { name: 'ESLint', icon: SiEslint },
  fastapi: { name: 'FastAPI', icon: SiFastapi },
  firebase: { name: 'Firebase', icon: SiFirebase },
  git: { name: 'Git', icon: SiGit },
  github: { name: 'GitHub', icon: SiGithub },
  'github-actions': { name: 'GitHub Actions', icon: SiGithubactions },
  hono: { name: 'Hono', icon: SiHono },
  html: { name: 'HTML', icon: SiHtml5 },
  illustrator: { name: 'Illustrator', icon: SiAdobeillustrator },
  javascript: { name: 'JavaScript', icon: SiJavascript },
  jupyter: { name: 'Jupyter', icon: SiJupyter },
  jest: { name: 'Jest', icon: SiJest },
  mantine: { name: 'Mantine', icon: SiMantine },
  mysql: { name: 'MySQL', icon: SiMysql },
  numpy: { name: 'NumPy', icon: SiNumpy },
  postgresql: { name: 'PostgreSQL', icon: SiPostgresql },
  nestjs: { name: 'Nestjs', icon: SiNestjs },
  nextjs: { name: 'Next.js', icon: SiNextdotjs },
  node: { name: 'Node.js', icon: SiNodedotjs },
  pandas: { name: 'Pandas', icon: SiPandas },
  // playwright: { name: 'Playwright', icon: SiPlaywright },
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
  supabase: { name: 'Supabase', icon: SiSupabase },
  tauri: { name: 'Tauri', icon: SiTauri },
  threejs: { name: 'Three.js', icon: SiThreedotjs },
  typescript: { name: 'TypeScript', icon: SiTypescript },
  trpc: { name: 'trpc', icon: SiTrpc },
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
