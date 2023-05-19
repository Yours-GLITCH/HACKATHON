import CopyBox from "./CopyBox";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof CopyBox> = {
    title: 'Copy Box',
    component: CopyBox,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Copy: Story = {
    args: {
        text: "Hi, I'm Copy Box!",
        copyNotificationText: "Copy Success!"
    }
}