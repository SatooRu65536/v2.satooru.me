import type { Meta, StoryObj } from '@storybook/react';

import PageNation from '.';

const meta: Meta<typeof PageNation> = {
  component: PageNation,
};

export default meta;
type Story = StoryObj<typeof PageNation>;

export const First: Story = {
  args: {
    currentPage: 1,
    pageTo: (page: number) => `/posts?p=${page}`,
    totalArticles: 1000,
  },
};

export const Middle: Story = {
  args: {
    currentPage: 10,
    pageTo: (page: number) => `/posts?p=${page}`,
    totalArticles: 1000,
  },
};

export const Last: Story = {
  args: {
    currentPage: 42,
    pageTo: (page: number) => `/posts?p=${page}`,
    totalArticles: 1000,
  },
};
