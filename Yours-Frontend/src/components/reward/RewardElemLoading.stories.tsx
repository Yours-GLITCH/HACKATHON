import RewardElemLoading from "./RewardElemLoading";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof RewardElemLoading> = {
    title: 'reward/reward loading',
    component: RewardElemLoading,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {}