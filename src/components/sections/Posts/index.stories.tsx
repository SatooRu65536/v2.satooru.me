import type { Meta, StoryObj } from '@storybook/react';

import RecentPostsSection from '.';

const meta: Meta<typeof RecentPostsSection> = {
  component: RecentPostsSection,
};

export default meta;
type Story = StoryObj<typeof RecentPostsSection>;

export const Primary: Story = {
  args: {},
};
