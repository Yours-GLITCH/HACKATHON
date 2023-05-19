import MiniHeader from "./MiniHeader";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof MiniHeader> = {
    title: 'Mini Header',
    component: MiniHeader,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {
    args: {
        title: 'Title',
    }
}