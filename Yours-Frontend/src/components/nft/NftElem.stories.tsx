import type { Meta, StoryObj } from '@storybook/react';
import NftElem from "./NftElem";

const meta : Meta<typeof NftElem> = {
    title: 'nft/NFT',
    component: NftElem,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Nft: Story = {
    args: {
        nftInfo: {
            id: 1,
            nftName: 'NFT Name',
            image: 'https://yours-bucket.s3.ap-northeast-2.amazonaws.com/static/og-image/og-image.png',
            numberOfOwners: 0,
            description: 'NFT Description',
            numberOfRewards: 0,
            rewards: [],
        }
    }
}