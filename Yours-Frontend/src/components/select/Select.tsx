import { useState, useEffect } from 'react';
import { ReactComponent as ArrowDown } from '../../asset/svg/arrow-down.svg';
import './Select.scss';

type SelectProp = {
    /**
     * Placeholder for select
     */
    placeholder?: string;
    /**
     * Selected value
     */
    value: any;
    /**
     * Function to set value
    */
    setValue: Function;
    /**
     * Disabled
     */
    disabled?: boolean;
    /**
     * Option list
     */
    optionList: Array<any>;
    /**
     * Options that are disabled
     */
    disabledOptionList?: Array<any>;
    /**
     * What is the key representing the name of the option object?
     */
    optionNameKey?: string;
    /**
     * What is the key representing the value of the option object?
     */
    optionValueKey?: string;
    /**
     * What is the key representing the icon of the option object?
     * If there is no icon, it is not necessary.
     */
    optionIconKey?: string;
}

/**
 * Custom Select Component
 */
function Select({ placeholder, value, setValue, disabled=false, optionList, disabledOptionList, optionIconKey="icon", optionNameKey="name", optionValueKey="value" }:SelectProp) {
    const [selectedOption, setSelectedOption] = useState<any>(null);
    
    useEffect(()=>{
        setSelectedOption(optionList.find(el=>el[optionValueKey] === value))
    }, [optionList, value])

    return (
        <div 
            className="select-input"
            id={disabled ? "disabled" : ""}
        >
            <button
                id="select-input-button"
                className="select-input-value"
                onTouchStart={(e)=>e.currentTarget.focus()}
            >
                {
                    !!(selectedOption)
                    ? <span className="selected-value">
                        {
                            !!(selectedOption[optionIconKey]) &&
                            <img className="selected-value-icon" src={selectedOption[optionIconKey]}/>
                        }
                        <h5>{ selectedOption[optionNameKey] }</h5>
                    </span>
                    : <h5 className="selected-value-text placeholder">{ placeholder }</h5>
                }
                <ArrowDown className="arrow-down-icon"/>

                <div
                    className="select-input-option-list"
                >
                    {
                        optionList.map((option, idx) => (
                            <div
                                className="select-input-option"
                                id={disabledOptionList?.includes(option[optionValueKey]) ? "disabled" : ""}
                                key={idx}
                                onClick={()=>{setValue(option[optionValueKey]); document.getElementById('select-input-button')?.blur()}}
                                onTouchEnd={()=>{setValue(option[optionValueKey]); document.getElementById('select-input-button')?.blur()}}
                            >
                                {
                                    option[optionIconKey] && 
                                    <img className="select-input-option-icon" src={option[optionIconKey]}/>
                                }
                                <h5>{option[optionNameKey]}</h5>
                            </div>
                        ))
                    }
                </div>
            </button>
        </div>
    )
}
export default Select;