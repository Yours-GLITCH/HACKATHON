import { chainType } from "ChainType";
import chainList from "../../utils/data/chainList";
import './ChainTextIcon.scss';

type chainTextIconProp = {
    /**
     * Chain type
    */
    chainType: chainType;
    /**
     * Text color
    */
    color?: string;
    /**
     * Background color
    */
    backgroundColor?: string;
}

/**
 * Show chain info with icon and text
 */
function ChainTextIcon ({ chainType, color="#BDBDBD", backgroundColor="transparent" }:chainTextIconProp) {

    return (
        <div 
            className="chain-text-icon-wrapper"
            style={{backgroundColor: backgroundColor}}
        >
            {chainList.find(el=>el.name===chainType)?.icon}
            <span 
                className="chain-text"
                style={{color: color}}
            >
                { chainType }
            </span>
        </div>
    )
}
export default ChainTextIcon;