import Button from '../button/Button';
import Modal from '../modal/Modal';
import './index.scss';

export type popupProps = {
    /**
     * Function to close popup
     */
    closeModal: () => void;
    /**
     * Popup title
     */
    title: string;
    /**
     * Text for approve button
     */
    approveText?: string;
    /**
     * Text for deny button
     */
    denyText?: string;
    /**
     * Function for approve button
     */
    approve: Function;
    /**
     * Function for deny button
     */
    deny?: Function | null;
}

const defaultApproveText = "예";
const defaultDenyText = "아니오";

/**
 * Popup UI component
 */
export const Popup = ({ closeModal, title, approveText=defaultApproveText, denyText=defaultDenyText, approve, deny=null } : popupProps) => {

    return (
        <Modal closeModal={closeModal}>
            <div className="modal-wrapper popup">
                <div className="popup-title">{title}</div>
                <div className="popup-button-wrapper">
                    {
                        deny &&
                        <Button 
                            className="popup-button"
                            theme="black"
                            text={ denyText }
                            onClick={()=>deny()}
                        />
                    }
                    <Button
                        className="popup-button"
                        theme="purple"
                        text={ approveText }
                        onClick={()=>approve()}
                    />
                </div>
            </div>
        </Modal>
    )
}