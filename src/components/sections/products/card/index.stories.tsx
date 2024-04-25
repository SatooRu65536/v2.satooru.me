import type { Meta, StoryObj } from '@storybook/react';

import Card from '.';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    article: {
      data: {
        category: 'product',
        created_at: '2021-09-01T00:00:00.000Z',
        number: 0,
        title: 'Product 1',
        published: 'true',
        tags: 'javascript, typescript, react, nextjs, tauri, aftereffects, c, cloudflare',
        updated_at: '2021-09-01T00:00:00.000Z',
      },
      content: 'Product 1 content',
      category: 'product',
      filePath: 'articles/0.html.md',
      postedAt: '2021-09-01T00:00:00.000Z',
      thumbnail: '/default/penguin.webp'
    },
  },
};
