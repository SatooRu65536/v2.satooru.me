import type { Meta, StoryObj } from '@storybook/react';

import WorksSection from '.';

const meta: Meta<typeof WorksSection> = {
  component: WorksSection,
};

export default meta;
type Story = StoryObj<typeof WorksSection>;

export const Primary: Story = {
  args: {},
};
