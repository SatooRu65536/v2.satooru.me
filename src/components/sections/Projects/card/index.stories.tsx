import type { Meta, StoryObj } from '@storybook/react';

import ProjectCard from '.';

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Primary: Story = {
  args: {
    title: 'satooru.me',
    description: 'プロフィールサイトの最新版です.',
    repository: 'https://github.com/',
    site: 'https://satooru.me/',
    techs: ['javascript', 'typescript', 'react', 'nextjs', 'tauri', 'aftereffects', 'c', 'cloudflare'],
  },
};
