import { useState } from "react";
import Button from "../../components/button/Button";
import DiscardModal from "./DiscardModal";

type adminDetailProp = {
    detailInfo:any;
    photoDescription:string | undefined;
    approveAction:Function;
    discardAction:Function;
}

function AdminDetail({ detailInfo, photoDescription, approveAction, discardAction }:adminDetailProp) {
    const [showDiscardModal, setShowDiscardModal] = useState(false);

    return (
        <>
        {
            showDiscardModal &&
            <DiscardModal 
                closeModal={()=>{setShowDiscardModal(false)}}
                discardAction={(reason:string)=>{discardAction(detailInfo.id, reason)}}
            />
        }
        <div className="nftadmin-detail">
            <div className="user-profile-wrapper">
                <img className="profile-image" src={detailInfo?.profileImage}/>
                <h3>{detailInfo?.name} 님의 요청입니다.</h3>
            </div>
            
            <h3 className="content-subtitle">인증 사진 설명 :</h3>
            <h5 className="nftadmin-description">
                { photoDescription }
            </h5>

            <img 
                className="nftadmin-detail-image"
                src={detailInfo?.image}
            />

            <div className="button-wrapper">
                <Button 
                    theme="black"
                    text="거절"
                    onClick={()=>{setShowDiscardModal(true)}}
                />
                <Button 
                    theme="purple"
                    text="승인"
                    onClick={()=>{approveAction(detailInfo.id)}}
                />
            </div>
        </div>
        </>
    )
}
export default AdminDetail;