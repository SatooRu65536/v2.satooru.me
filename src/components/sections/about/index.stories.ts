import type { Meta, StoryObj } from '@storybook/react';

import AboutSection from '.';

const meta: Meta<typeof AboutSection> = {
  component: AboutSection,
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

export const Primary: Story = {
  args: {},
};
