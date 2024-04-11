import type { Meta, StoryObj } from '@storybook/react';

import AwardsSection from '.';

const meta: Meta<typeof AwardsSection> = {
  component: AwardsSection,
};

export default meta;
type Story = StoryObj<typeof AwardsSection>;

export const Primary: Story = {
  args: {},
};
