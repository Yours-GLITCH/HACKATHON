import RewardElem from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof RewardElem> = {
    title: 'reward/reward',
    component: RewardElem,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        nftName: "Yours NFT",
        nftId: 1,
        reward: {
            rewardName: "Happy Day",
            id: 1,
        }
    }
}