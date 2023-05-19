import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NFTApi from '../../../apis/NftApi';
import { useNft } from '../../../hook/useNft';
import { useNftAdmin } from '../../../hook/useNftAdmin';
import { setShowAlertInfo } from '../../../utils/function/showAlert';
import Loading from '../../../components/loading/Loading';
import ConfirmNftInfo from './ConfirmNftInfo';
import DeoploySuccess from './DeploySuccess';
import './index.scss';

function NftDeploy () {
    const nftApi = new NFTApi();
    const navigation = useNavigate();
    const { nftId } = useParams();
    const { nftInfo } = useNft({ nftId: Number(nftId) });
    const { rewardList } = useNftAdmin({ nftId: Number(nftId) });
    const [pageMode, setPageMode] = useState('CONFIRM');
    const [deployInfo, setDeployInfo] = useState<any>();

    const deployNft = async () => {
        try {
            setPageMode('LOADING');
            const res = await nftApi.deployNft(Number(nftId));
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
                return <ConfirmNftInfo 
                    nftInfo={nftInfo}
                    deployNft={deployNft}
                    rewardList={rewardList}
                />
            case 'LOADING':
                return <Loading 
                    loadingText={<><b>{ nftInfo.nftName }</b> NFT를<br/> <b>{ nftInfo.chainType }</b> 체인에서<br/> 발행하는 중이에요</>}
                />
            case 'SUCCESS':
                return <DeoploySuccess 
                    nftInfo={nftInfo}
                    deployInfo={deployInfo}
                />
            default:
        }
    }

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

    useEffect(()=>{
        if (nftInfo?.isDeployed) {
            // 이미 발행 된 NFT라면, 이전 페이지로 가도록 함
            navigation(-1);
        }
    }, [nftInfo])

    return (
        <div className="nft-setting-deploy">
            { pageRenderer() }
        </div>
    )
}
export default NftDeploy;