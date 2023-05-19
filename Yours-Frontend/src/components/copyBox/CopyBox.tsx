import { copyText } from '../../utils/function/linkShare';
import { ReactComponent as CopyIcon } from '../../asset/svg/copy-text.svg';
import './CopyBox.scss';

type copyBoxProps = {
    /**
     * Text to copy
    */
    text: string;
    /**
     * Notification text to show when text is copied
    */
    copyNotificationText: string;
}

/**
 * Box element to copy text to clipboard
*/
function CopyBox({ text, copyNotificationText }:copyBoxProps) {

    return (
        <div className="copy-box-wrapper">
            { text }
            <button 
                className="copy-button"
                onClick={()=>{copyText(text, copyNotificationText)}}
                onTouchEnd={()=>{copyText(text, copyNotificationText)}}
            >
                <CopyIcon />
            </button>
        </div>
    )
}
export default CopyBox;