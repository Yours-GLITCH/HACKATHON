import starImg from '../../asset/image/star.png';
import './LoadingWithSpinningImg.scss';

interface LoadingWithSpinningImgProps {
    /**
     * Title for loading
     */
    title?: React.ReactNode,
    /**
     * Image for loading
     */
    imageUrl?: string,
}

/**
 * Loading UI component that shows spinning image and text
 */
function LoadingWithSpinningImg({ title, imageUrl=starImg }:LoadingWithSpinningImgProps) {

    return (
        <div className="star-loading">
            <img className="star-image" src={imageUrl}/>
            { title }
        </div>
    )
}
export default LoadingWithSpinningImg;