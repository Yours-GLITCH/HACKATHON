import { ReactNode } from "react";
import Modal from "../modal/Modal";
import { ReactComponent as CloseIcon } from '../../asset/svg/close-circle.svg';
import './StatusModal.scss';
import Button from "../button/Button";

type statusModalProp = {
    /**
     * Image for modal
     */
    modalImage: string;
    /**
     * Text for modal
    */
    modalText: ReactNode;
    /**
     * Text for button
    */
    buttonText: string;
    /**
     * Button theme
    */
    buttonColor?: ('green'|'purple'|'black');
    /**
     * Function for button
     */
    buttonAction: Function;
    /**
     * Function to close modal
     */
    closeModal: Function
}

/** 
 * Modal UI Component that shows status
 * */
function StatusModal ({ modalImage, modalText, buttonColor='green', buttonText, buttonAction, closeModal }:statusModalProp) {

    return (
        <Modal closeModal={closeModal}>
            <div className="modal-wrapper status-modal">
                <div className="modal-header">
                    <CloseIcon className="modal-close" onClick={()=>{closeModal()}}/>
                </div>
                <div className="modal-body">
                    <img className="status-image" src={modalImage}/>
                    <div className="status-text">
                        { modalText }
                    </div>

                    <Button 
                        text={buttonText}
                        theme={buttonColor}
                        onClick={()=>{buttonAction()}}
                    />
                </div>
                <div className="modal-footer" />
            </div>
        </Modal>
    )
}
export default StatusModal;