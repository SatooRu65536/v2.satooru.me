import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import RecentPostsSection from '.';

const meta: Meta<typeof RecentPostsSection> = {
  component: RecentPostsSection,
};

export default meta;
type Story = StoryObj<typeof RecentPostsSection>;

export const Primary: Story = {
  args: {
    title: 'Post Title',
    content: 'Asdfadsfadf',
    date: dayjs('2024-10-01'),
  },
};
