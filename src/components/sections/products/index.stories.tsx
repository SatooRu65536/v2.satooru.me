import type { Meta, StoryObj } from '@storybook/react';

import ProductsSection from '.';

const meta: Meta<typeof ProductsSection> = {
  component: ProductsSection,
};

export default meta;
type Story = StoryObj<typeof ProductsSection>;

export const Primary: Story = {
  args: {},
};
