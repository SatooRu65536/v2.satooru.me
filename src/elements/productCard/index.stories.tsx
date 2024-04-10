import type { Meta, StoryObj } from '@storybook/react';

import Card from '.';

import Icon from '@/elements/icon';

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
    techs: [
      <Icon size={32} iconKey="javascript" key={1} />,
      <Icon size={32} iconKey="typescript" key={2} />,
      <Icon size={32} iconKey="react" key={3} />,
      <Icon size={32} iconKey="nextjs" key={4} />,
      <Icon size={32} iconKey="tauri" key={5} />,
      <Icon size={32} iconKey="aftereffects" key={6} />,
      <Icon size={32} iconKey="c" key={7} />,
      <Icon size={32} iconKey="cloudflare" key={8} />,
    ],
  },
};
