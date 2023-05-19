import StatusModal from "./StatusModal";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof StatusModal> = {
    title: 'Status Modal',
    component: StatusModal,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{width: "-webkit-fill-available", height: "480px"}}>
                <div style={{width: "100%", height: "540px", transform: "scale(1)", position: "absolute", left: "0", top: "0"}}>
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
        modalImage: '/logo192.png',
        modalText: 'Yours',
        buttonText: 'Button',
        buttonColor: 'purple',
        buttonAction: ()=>{return},
        closeModal: ()=>{return},
    }
}