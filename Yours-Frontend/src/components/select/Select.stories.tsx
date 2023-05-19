import Select from "./Select";
import type { Meta, StoryObj } from '@storybook/react';
import chainList from "../../utils/data/chainList";
import { useState } from "react";

const meta : Meta<typeof Select> = {
    title: 'Select',
    component: Select,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Select something",
        value: "",
        setValue: ()=>{return},
        optionList: [
            { name: "Orange", value: "Orange", icon: null },
            { name: "Cherry", value: "Cherry", icon: null },
            { name: "Strawberry", value: "Strawberry", icon: null },
        ],
    }
}

const SelectWithHooks = () => {
    const [value, setValue] = useState(false);

    return <Select 
        placeholder={"Select Your Favorite Chain"}
        value={value}
        setValue={setValue}
        optionValueKey={"name"}
        optionIconKey={"logo"}
        optionList={chainList}
    />
}

export const ChainSelectorExample: Story = {
    render: () => <SelectWithHooks />
}