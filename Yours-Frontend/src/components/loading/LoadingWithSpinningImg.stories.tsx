import LoadingWithSpinningImg from "./LoadingWithSpinningImg";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof LoadingWithSpinningImg> = {
    title: 'loading/Loading With Spinning Image',
    component: LoadingWithSpinningImg,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Loading..."
    }
}