import Success from "./Success";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof Success> = {
    title: 'Success',
    component: Success,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{position: "relative"}}>
                <Story/>
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        image: "/logo192.png",
        title: <div>
                <b>Yours</b> NFT<br/>
                받기에 성공하셨습니다
            </div>,
        buttonText: "Button",
        buttonAction: () => {return},
    }
}