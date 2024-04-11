import type { Meta, StoryObj } from '@storybook/react';

import Card from '.';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    title: 'Card Title',
    tag: '#webアプリ',
    w: 300,
    thumbnail: '/icon.webp',
    techs: ['javascript', 'typescript', 'react', 'nextjs', 'tauri', 'aftereffects', 'c', 'cloudflare'],
  },
};
