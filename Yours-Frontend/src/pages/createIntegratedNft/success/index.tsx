import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { decrypt } from "../../../utils/function/crypto";
import { toLocaleTime } from "../../../utils/function/time";
import { useBackground } from "../../../hook/useBackground";
import chainList from "../../../utils/data/chainList";
import Glitter from "../../../components/glitter/Glitter";
import BlurryLoadingImage from "../../../components/blurryLoadingImage/BlurryLoadingImage";
import Button from "../../../components/button/Button";
import './index.scss';

function Success() {
    const navigation = useNavigate();
    const { integratedNftInfo } = useParams();
    const [nftInfo, setNftInfo] = useState<any>();
    const [nftCard, setNftCard] = useState<any>();
    useBackground({backgroundStyle: 'GRADIENT'});

    useEffect(()=>{
        nftInfo && setNftCard(chainList.find((el:any)=>el.name===nftInfo.chainType))
    }, [nftInfo])

    useEffect(()=>{
        setNftInfo(decrypt(integratedNftInfo));
    }, [integratedNftInfo])

    return (
        <div
            className="integrated-nft-create-success"
        >
            <Glitter />
            {
                nftInfo &&
                <div>
                    {
                        nftCard &&
                        <BlurryLoadingImage 
                            preview={nftCard.card.preview}
                            image={nftCard.card.image}
                            alt="integrated nft"
                            imageStyleClass="integrated-card-image"
                        />
                    }

                    {/* <img className="integrated-card-image" src={nftCard?.image}/> */}
                    <div className="congratulations">Congratulations!</div>
                    <div
                        className="integrated-nft-text"
                    >
                        통합 NFT를<br/>
                        <b>{ nftInfo.chainType }</b> 체인에서<br/>
                        생성했어요
                    </div>
                    <h2 className="eng integrated-nft-info-title">Info</h2>
                    <div className="integrated-nft-info-wrapper">
                        <div className="integrated-nft-info">
                            <div>Status</div>
                            <div className="integrated-nft-info-content">Success</div>
                        </div>
                        <div className="integrated-nft-info">
                            <div>Date</div>
                            <div className="integrated-nft-info-content">{ toLocaleTime(nftInfo.createdAt) }</div>
                        </div>
                    </div>
                </div>
            }
            <Button 
                theme="purple"
                text="마이페이지로 가기"
                onClick={()=>{navigation('/mypage')}}
            />
        </div>
    )
}
export default Success;