import MessageBox from "./MessageBox";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof MessageBox> = {
    title: 'Message Box',
    component: MessageBox,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Message: Story = {
    args: {
        message: "This is Message box",
        closeMessage: () => {return}
    }
}