import type { Meta, StoryObj } from '@storybook/react';

import IconCard from '.';

const meta: Meta<typeof IconCard> = {
  component: IconCard,
};

export default meta;
type Story = StoryObj<typeof IconCard>;

export const NestjsLG: Story = {
  args: {
    iconKey: 'nestjs',
    size: 'lg',
  },
};
export const NestjsSM: Story = {
  args: {
    iconKey: 'nestjs',
    size: 'sm',
  },
};
