import pushpinImg from '../../asset/image/pushpin.png';
import { ReactComponent as CloseIcon } from '../../asset/svg/close.svg';
import './MessageBox.scss';

type messageBoxProp = {
    /**
     * Message text
     */
    message: string;
    /**
     * Function to close message box
     */
    closeMessage?:Function;
}

/**
 * Message box UI component
 */
function MessageBox({ message, closeMessage }:messageBoxProp) {

    return (
        <div className="message-box">
            <img className="message-box-pushpin" src={pushpinImg}/>
            { closeMessage && <CloseIcon className="message-box-close" onClick={()=>closeMessage()} /> }
            <div className="message-box-text">{ message }</div>
        </div>
    )
}
export default MessageBox;