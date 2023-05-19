import ContentsBox from "./ContentsBox";
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof ContentsBox> = {
    title: 'Contents Box',
    component: ContentsBox,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Box: Story = {
    args: {
        title: "Contents Box Title",
        initialOpened: true,
        children: <div style={{height: "100px", fontSize: "15px"}}>
            <div>contents will be placed in here</div>
        </div>
    }
}