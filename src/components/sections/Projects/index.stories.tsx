import type { Meta, StoryObj } from '@storybook/react';

import ProjectsSection from '.';

const meta: Meta<typeof ProjectsSection> = {
  component: ProjectsSection,
};

export default meta;
type Story = StoryObj<typeof ProjectsSection>;

export const Primary: Story = {
  args: {},
};
