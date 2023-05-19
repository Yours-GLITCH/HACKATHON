import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NFTApi from '../../../apis/NftApi';
import { useNft } from '../../../hook/useNft';
import { useNftAdmin } from '../../../hook/useNftAdmin';
import { setShowAlertInfo } from '../../../utils/function/showAlert';
import Loading from '../../../components/loading/Loading';
import ConfirmRewardInfo from './ConfirmRewardInfo';
import DeployRewardSuccess from './DeployRewardSuccess';

function NftDeployReward () {
    const navigation = useNavigate();
    const nftApi = new NFTApi();
    const { nftId } = useParams();
    const { nftInfo } = useNft({ nftId: Number(nftId) });
    const { rewardList } = useNftAdmin({ nftId: Number(nftId) });
    const [pageMode, setPageMode] = useState('CONFIRM');
    const [deployInfo, setDeployInfo] = useState<any>();

    const deployNft = async () => {
        try {
            setPageMode('LOADING');
            const res = await nftApi.editDeployNft(Number(nftId));
            setDeployInfo(res);
            setPageMode('SUCCESS');
        } catch(err:any) {
            setPageMode('CONFIRM');
            setShowAlertInfo(err.response.data.message, false);
        }
    }

    const pageRenderer = () => {
        switch(pageMode) {
            case 'CONFIRM':
                return <ConfirmRewardInfo 
                    deployNft={deployNft}
                    rewardList={rewardList}
                />
            case 'LOADING':
                return <Loading 
                    loadingText={<><b>{ nftInfo.nftName }</b> NFT를<br/>업데이트 하는 중이에요</>}
                />
            case 'SUCCESS':
                return <DeployRewardSuccess 
                    nftInfo={nftInfo}
                    deployInfo={deployInfo}
                />
            default:
        }
    }

    useEffect(()=>{
        // if (!(nftInfo?.isDeployed && !nftInfo?.isEdited)) {
        //     // 발행되었고 수정된 NFT가 아니라면, 이전 페이지로 가도록 함
        //     navigation(-1);
        // }
    }, [nftInfo])

    const preventToClose = (e:any) => {
        e.preventDefault();
        e.returnValue = '';
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        if (pageMode == 'LOADING') {
            window.addEventListener('beforeunload', preventToClose);
        } else {
            window.removeEventListener('beforeunload', preventToClose);
        }
        return () => window.removeEventListener('beforeunload', preventToClose);
    }, [pageMode])

    return (
        <div className="nft-setting-deploy">
            { pageRenderer() }
        </div>
    )
}
export default NftDeployReward;