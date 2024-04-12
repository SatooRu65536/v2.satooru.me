import type { Meta, StoryObj } from '@storybook/react';

import SkillsSection from '.';

const meta: Meta<typeof SkillsSection> = {
  component: SkillsSection,
};

export default meta;
type Story = StoryObj<typeof SkillsSection>;

export const Primary: Story = {
  args: {},
};
