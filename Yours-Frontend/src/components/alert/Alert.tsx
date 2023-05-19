import positiveImg from '../../asset/image/heart-face.png';
import negativeImg from '../../asset/image/skull.png';
import './Alert.scss';

interface AlertProps {
    /**
     * Whether to show alert
    */
    showAlert: boolean;
    /**
     * Alert text
    */
    alertText: string;
    /**
     * Whether alert is positive
    */
    positiveState: boolean;
}

function Alert({ showAlert, alertText, positiveState }:AlertProps) {

    return (
        <div 
            className={ showAlert ? "alert-container" : "alert-container alert-container--hidden" }
            id={ positiveState ? "positive" : "negative" }
        >
            <img className="alert-image" src={ positiveState ? positiveImg : negativeImg }/>
            <h4 className="alert-text">{ alertText }</h4>
        </div>
    )
}
export default Alert;