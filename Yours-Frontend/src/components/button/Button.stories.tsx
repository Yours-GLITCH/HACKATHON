import Button from "./Button";
import type { Meta, StoryObj } from '@storybook/react';
import { ReactComponent as Icon } from "../../asset/svg/klaytn.svg";

const meta : Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonSample: Story = {
    args: {
        text: "Hi, I'm Button!",
        onClick: () => {return},
        theme: "purple",
    }
}
export const ButtonWithIcon: Story = {
    args: {
        text: "Button With Icon",
        onClick: () => {return},
        theme: "black",
        icon: <Icon/>
    }
}