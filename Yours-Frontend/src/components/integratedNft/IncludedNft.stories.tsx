import IncludedNft from "./IncludedNft";
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from "react";

const defaultNftInfo = {
    id: 1,
    nftName: "NFT Name",
    nftImage: "https://yours-bucket.s3.ap-northeast-2.amazonaws.com/static/og-image/og-image.png",
};

const meta : Meta<typeof IncludedNft> = {
    title: 'integrated nft/Included Nft',
    component: IncludedNft,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Nft: Story = {
    args: {
        nftInfo: defaultNftInfo,
        disabled: false,
    }
}