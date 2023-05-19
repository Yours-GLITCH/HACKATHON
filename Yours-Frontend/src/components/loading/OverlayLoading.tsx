import { ReactComponent as LoadingIcon } from '../../asset/svg/loading.svg';
import './index.scss';

interface OverlayLoadingProps {
    /**
     * Title for loading
     * If there is no title, it is not necessary.
     */
    title?: string,
}

/**
 * Loading UI component that is overlayed on the screen
 */
function OverlayLoading({ title }:OverlayLoadingProps) {

    return (
        <div className="loader" title="2">
            <div className="loading-title">{ title }</div>
            <LoadingIcon />
        </div>
    )
}
export default OverlayLoading;