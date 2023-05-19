import Alert from "./Alert";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof Alert> = {
    title: 'Alert',
    component: Alert,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{height: "210px", transform: "scale(1)"}}>
                <Story/>
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertPositive: Story = {
    args: {
        showAlert: true,
        alertText: "To notifiy something",
        positiveState: true
    }
}
export const AlertWarning: Story = {
    args: {
        showAlert: true,
        alertText: "To warn something",
        positiveState: false
    }
}