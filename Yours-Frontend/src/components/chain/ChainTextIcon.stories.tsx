import ChainTextIcon from "./ChainTextIcon";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof ChainTextIcon> = {
    title: 'Chain',
    component: ChainTextIcon,
    tags: ['autodocs'],
    argTypes: {
        chainType: {
            control: { type: 'select' },
            options: ['Ethereum', 'Klaytn', 'Polygon', 'Solana', 'Aptos']
        },
        backgroundColor: {
            control: { type: 'color' }
        },
        color: {
            control: { type: 'color' }
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Chain: Story = {
    args: {
        chainType: 'Ethereum',
        backgroundColor: '',
        color: ''
    }
}