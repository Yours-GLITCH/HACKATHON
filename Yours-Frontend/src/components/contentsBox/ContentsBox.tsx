import { useEffect, useState } from "react";
import { ReactComponent as ArrowDown } from "../../asset/svg/arrow-down.svg";
import './ContentsBox.scss'

interface ContentsBoxProps {
    /**
     * Title of the contents box
     */
    title: string;
    /**
     * Whether the contents box is disabled
     */
    disabled?: boolean;
    /**
     * Contents of the contents box
     * If there is no content, it is not necessary.
    */
    children?: React.ReactNode;
    /**
     * Whether the contents box is opened initially
     */
    initialOpened?: boolean;
    /**
     * z-index
     */
    zIndex?: number;
}

/**
 * Contents Box UI component that can be opened and closed
 */
function ContentsBox({ title, disabled=false, children, initialOpened=true, zIndex }:ContentsBoxProps) {
    const [showContent, setShowContent] = useState(disabled ? false : initialOpened);
    
    useEffect(()=>{
        if (initialOpened) {
            setShowContent(true);
        } else {
            if (disabled) {
                setShowContent(false);
            } else {
                setShowContent(initialOpened);
            }
        }
    }, [disabled, initialOpened])

    return (
        <div
            className={
                `action-box-container 
                ${disabled ? "disabled" : ""}
                ${showContent ? "opened" : ""}
                `
            }
        >
            <div 
                className="action-box-header"
                onClick={()=>setShowContent(!showContent)}
            >
                <h3 className="action-box-title">{ title }</h3>
                {
                    children &&
                    <ArrowDown 
                        className={`action-box-toggle ${showContent ? "rotate" : ""}`}
                    />
                }
            </div>
            {/* {
                showContent && */}
                <div className="action-box-content"
                    style={zIndex ? { zIndex: zIndex } : {}}
                >
                    { children }
                </div>
            {/* } */}
        </div>
    )
}
export default ContentsBox;