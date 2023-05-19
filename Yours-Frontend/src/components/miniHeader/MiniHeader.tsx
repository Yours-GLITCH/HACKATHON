import { useNavigate } from "react-router-dom";
import { ReactComponent as GoBackIcon } from "../../asset/svg/arrow-left.svg";
import './MiniHeader.scss';

type miniHeaderType = {
    /**
     * Page title
     */
    title:string;
    /**
     * You can add children component
     */
    children?: JSX.Element;
}

/**
 * Header component with page title and back button
 */
function MiniHeader({ title, children }:miniHeaderType) {
    const navigation = useNavigate();

    return (
        <div className="mini-header-container">
            <GoBackIcon 
                className="mini-header-goback"
                onClick={()=>navigation(-1)}
            />
            <div className="mini-header-title">{ title }</div>
            { children }
        </div>
    )
}
export default MiniHeader;