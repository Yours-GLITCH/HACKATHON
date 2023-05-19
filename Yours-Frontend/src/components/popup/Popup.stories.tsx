import { Popup } from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof Popup> = {
    title: 'Popup',
    component: Popup,
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

export const PopUp: Story = {
    args: {
        closeModal: ()=>{return},
        title: "I'm Popup !",
        approveText: "Yes",
        denyText: "No", 
        approve: ()=>{return},
        deny: ()=>{return},
    }
}