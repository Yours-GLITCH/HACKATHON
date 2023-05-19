import AvailableNft from "./AvailableNft";
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from "react";

const defaultNftInfo = {
    id: 1,
    nftName: "NFT Name",
    image: "https://yours-bucket.s3.ap-northeast-2.amazonaws.com/static/og-image/og-image.png",
    numberOfOwners: 0,
    description: "NFT Description",
    numberOfRewards: 0,
    rewards: [],
};

const meta : Meta<typeof AvailableNft> = {
    title: 'integrated nft/Available Nft',
    component: AvailableNft,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NftView: Story = {
    args: {
        nftInfo: defaultNftInfo,
        checked: false,
    }
}

const NftWithHooks = () => {
    const [checked, setChecked] = useState(false);

    return <AvailableNft 
        nftInfo={defaultNftInfo} 
        checked={checked} 
        checkAction={()=>setChecked(true)} 
        uncheckAction={()=>setChecked(false)}
    />
}

export const NftCheckHandler: Story = {
    render: () => <NftWithHooks />
}