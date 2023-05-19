import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import RewardElemLoading from './RewardElemLoading';

interface RewardElemProp {
    /**
     * NFT name related to reward
     */
    nftName: string,
    /**
     * NFT id related to reward
     */
    nftId: number,
    /**
     * Corresponding reward information
     */
    reward: RewardType
}

interface RewardType {
    rewardName: string,
    id: number
}

/**
 * NFT Reward UI component
 */
function RewardElem({ nftName, nftId, reward }:RewardElemProp) {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <>
        {
            loading
            ? <RewardElemLoading />
            : <div className="nft-reward-elem-wrapper">
                <div className="nft-reward-info-wrapper">
                    <div 
                        className="nft-name"
                        onClick={()=>{(navigation(`/nft/${nftId}/detail`))}}
                    >
                        { nftName }
                    </div>
                    <div className="reward-name">{ reward.rewardName }</div>
                </div>
                <button className="nft-reward-action-button" disabled={true}>
                    준비중
                </button>
            </div>
        }
        </>
    )
}
export default RewardElem;