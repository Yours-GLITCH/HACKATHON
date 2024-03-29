import { useWindowSize } from 'react-use';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './GetSuccess.scss';
import Button from '../../components/button/Button';

type createNftProps = {
    badgeInfo: any,
}

function CreateNftSuccess({ badgeInfo }:createNftProps) {
    const { width, height } = useWindowSize();
    const navigation = useNavigate();

    return (
        <div className="get-badge-success">
            <Confetti width={width > 430 ? 430 : width} height={height} numberOfPieces={50} className="confetti-rain"/>
            <div className="get-badge-success-content-wrapper">
                <img className="badge-image" src={badgeInfo.img_url}/>
                <div className="success-text">축하드립니다!</div>
                <div className="get-badge-text">
                    <b>{badgeInfo.badge_name}</b> 인증 NFT<br/>
                    생성 완료!
                </div>
            </div>

            <Button 
                theme="purple"
                text="NFT 생성 페이지 가기"
                onClick={()=>{navigation(`/nft/${badgeInfo.badge_id}/detail`)}}
            />
        </div>
    )
}
export default CreateNftSuccess;