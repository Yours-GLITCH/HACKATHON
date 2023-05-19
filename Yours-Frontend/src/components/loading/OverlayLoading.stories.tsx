import OverlayLoading from "./OverlayLoading";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof OverlayLoading> = {
    title: 'loading/Overlay Loading',
    component: OverlayLoading,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{width: "-webkit-fill-available", height: "320px"}}>
                <div style={{width: "100%", height: "400px", transform: "scale(1)", position: "absolute", left: "0", top: "0"}}>
                    <Story/>
                </div>
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Loading..."
    }
}