import WalletElem from "./WalletElem";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof WalletElem> = {
    title: 'wallet/Wallet elem',
    component: WalletElem,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Ethereum/ Polygon/ Klaytn",
        chainType: "Ethereum",
        address: "0x00000000000000000000001"
    }
}