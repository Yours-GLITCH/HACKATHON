import { Icon } from '@iconify/react';
import './Loading.scss';

interface LoadingProps {
    /**
     * Text for loading
     */
    loadingText: React.ReactNode;
    /**
     * Color for icon
     * @default #ed5f8a
     */
    iconColor?: string;
}

/**
 * Loading UI component that shows loading icon and text
 */
function Loading({ loadingText, iconColor="#ed5f8a" } : LoadingProps) {

    return (
        <div className="info-loading">
            <Icon 
                icon="line-md:loading-alt-loop" 
                width="60"
                color={iconColor}
            />
            <h3>
                { loadingText }
            </h3>
        </div>
    )
}
export default Loading;