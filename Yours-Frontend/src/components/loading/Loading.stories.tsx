import Loading from "./Loading";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof Loading> = {
    title: 'loading/Loading',
    component: Loading,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        loadingText: <div>
            Hi I'm<br/>
            <b>Loading Component !</b>
        </div>
    }
}