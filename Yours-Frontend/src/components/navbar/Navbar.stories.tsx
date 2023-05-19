import type { Meta, StoryObj } from '@storybook/react';
import Navbar from "./index";

const meta : Meta<typeof Navbar> = {
    title: 'Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
    args: {
        auth: true,
        profileImage: ''
    }
}

export const LoggedOut: Story = {
    args: {
        auth: false,
        profileImage: ''
    }
}