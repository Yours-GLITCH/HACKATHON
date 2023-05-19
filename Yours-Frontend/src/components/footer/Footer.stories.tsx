import FooterComponent from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof FooterComponent> = {
    title: 'Footer',
    component: FooterComponent,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Footer: Story = {
}