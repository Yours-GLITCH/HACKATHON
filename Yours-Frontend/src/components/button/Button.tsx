import './Button.scss';

interface ButtonProps {
    /**
     * Button text
    */
    text: string;
    /**
     * Function to execute when button is clicked
    */
    onClick?: Function;
    /**
     * If true, button will be sticky
    */
    sticky?: boolean;
    /**
     * Button theme
    */
    theme?: 'purple' | 'black' | 'green' | 'red' | 'white';
    /**
     * Button background color
    */
    bgColor?: string;
    /**
     * Button text color
    */
    textColor?: string;
    /**
     * Custom class name
    */
    className?: string;
    /**
     * Button children - You can add any element inside button
    */
    icon?: JSX.Element,
    /**
     * If true, button will be disabled
    */
    disabled?: boolean;
    /**
     * Button type
     */
    type?: 'button' | 'submit' | 'reset';
}

function Button({ text, onClick, sticky, theme, bgColor, textColor, className, icon, disabled=false, type="button" }: ButtonProps) {

    return (
        <button 
            className={"button button-component" + (sticky ? " button--sticky" : "") + (className ? " " + className : "")}
            id={theme}
            onClick={()=>{onClick && onClick()}}
            style={{backgroundColor: bgColor, color: textColor}}
            disabled={disabled}
            type={type}
        >
            { icon }
            { text }
        </button>
    )
}
export default Button;