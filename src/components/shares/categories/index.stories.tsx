import type { Meta, StoryObj } from '@storybook/react';

import PostCategories from '.';

const meta: Meta<typeof PostCategories> = {
  component: PostCategories,
};

export default meta;
type Story = StoryObj<typeof PostCategories>;

export const Primary: Story = {
  args: {
    categories: new Set(['category1', 'category2', 'category3', 'category4']),
    currentCategory: 'category2',
  },
};
