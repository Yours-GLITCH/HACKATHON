import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti';
import { ReactNode } from 'react';
import './Success.scss';
import Button from '../button/Button';

type successTypeProp = {
    /**
     * Image URL
     */
    image:string;
    /**
     * Success title
     */
    title:ReactNode;
    /**
     * Button text at the bottom of the component
    */
    buttonText:string;
    /**
     * Button action at the bottom of the component
    */
    buttonAction:Function;
    /**
     * Children component
    */
    children?: JSX.Element;
}

/**
 * Success UI component
*/
function Success({ image, title, buttonText, buttonAction, children }:successTypeProp) {
    const { width, height } = useWindowSize();

    return (
        <div className="success-page">
            <Confetti width={width > 430 ? 430 : width} height={height} numberOfPieces={50} className="confetti-rain"/>
            <div className="success-page-content-wrapper">
                <img className="success-page-image" src={image}/>
                <div className="success-page-text">Congratulation!</div>
                <div className="success-page-title">
                    { title }
                </div>
            </div>
            { children }
            <Button 
                sticky={true}
                theme="purple"
                onClick={()=>buttonAction()}
                text={buttonText}
            />
        </div>
    )
}
export default Success;