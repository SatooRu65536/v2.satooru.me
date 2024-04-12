import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import RecentBlogsSection from '.';

const meta: Meta<typeof RecentBlogsSection> = {
  component: RecentBlogsSection,
};

export default meta;
type Story = StoryObj<typeof RecentBlogsSection>;

export const Primary: Story = {
  args: {
    title: 'Blog Title',
    content: 'Asdfadsfadf',
    date: dayjs('2024-10-01'),
  },
};
