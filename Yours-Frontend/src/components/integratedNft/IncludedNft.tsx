import { useNavigate } from 'react-router-dom';
import './IncludedNft.scss';

interface IncludedNftProps {
    /**
     * Corresponding NFT information
     */
    nftInfo: any;
    /**
     * Whether NFT is disabled
     */
    disabled?: boolean;
}

/**
 * Nft UI component included in integrated NFT
 */
function IncludedNft({ nftInfo, disabled=false }:IncludedNftProps) {
    const navigation = useNavigate();

    return (
        <div 
            className="included-nft-wrapper flex-row-14"
            id={disabled ? "disabled" : ""}
            onClick={()=>{!disabled && navigation(`/nft/${nftInfo.nftId}/detail`)}}
        >
            <img src={ nftInfo.nftImage }/>
            <h4 className="eng">{ nftInfo.nftName }</h4>
        </div>
    )
}
export default IncludedNft;