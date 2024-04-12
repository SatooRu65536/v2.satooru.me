import type { Meta, StoryObj } from '@storybook/react';

import LinksSection from '.';

const meta: Meta<typeof LinksSection> = {
  component: LinksSection,
};

export default meta;
type Story = StoryObj<typeof LinksSection>;

export const Primary: Story = {
  args: {},
};
