import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import ListItem from '.';

const meta: Meta<typeof ListItem> = {
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Primary: Story = {
  args: {
    date: dayjs('2021-01-01'),
    type: '最優秀賞',
    title: 'Open hack U 2023 NAGOYA',
    link: 'https://satooru.me',
    description: 'なんかいいかんじにすごいwebアプリをつくりました',
  },
};

export const UseRange: Story = {
  args: {
    date: [dayjs('2021-01-01'), dayjs('2021-01-10')],
    type: 'インターン',
    title: '株式会社佐藤',
    description: 'プロフィールサイトです。',
  },
};
