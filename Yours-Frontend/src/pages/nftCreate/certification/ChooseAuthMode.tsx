import pushpinImg from '../../../asset/image/pushpin.png';
import Button from '../../../components/button/Button';

type chooseAuthModeProp = {
    setToPhoto: ()=>void,
    setToEmail: ()=>void
}

function ChooseAuthMode ({ setToPhoto, setToEmail }:chooseAuthModeProp) {

    return (
        <>
        <div className="title-wrapper">
            <h2 className="title">마지막으로 NFT를 받아가기 위한<br/> 인증 방법을 선택해주세요. (5/5)</h2>
        </div>
        <div className="certification-button-wrapper">
            <Button 
                theme="black"
                text="사진 찍어서 인증"
                onClick={()=>setToPhoto()}
            />
            <Button 
                theme="black"
                text="소속 기관 이메일 인증"
                onClick={()=>setToEmail()}
            />
        </div>
        <div className="whitelist-wrapper">
            <button className="show-whitelist-info"
                onTouchStart={(e)=>{e.currentTarget.focus()}}
            >
                ?⃝ 화이트리스트 모집 방식을 활용하고 싶으신가요?
            </button>
            <div className="whitelist-info-wrapper">
                <h5 className="whitelist-info-title">
                    ‘화이트리스트 모집 방식' 이란?
                    <img className="pushpin-icon" src={pushpinImg}/>
                </h5>
                <div className="whitelist-info-description">
                    NFT를 받을 자격이 있는 고객들의 정보를 사전 수합하는 방식을 말합니다. 구글폼을 통해 고객 정보를 수집한 후 서비스 내 휴대폰 번호 대조를 통해 특정한 고객에게만 NFT를 교부할 수 있습니다.
                    해당 방식에 대한 활용 문의는 <a href="mailto:contact@blockwavelabs.io">contact@blockwavelabs.io</a> 또는
                    <a href="http://pf.kakao.com/_xgxkExbxj">Yours 카카오톡 채널</a>을 통해 남겨주시기 바랍니다.
                </div>
            </div>
        </div>
        </>
    )
}
export default ChooseAuthMode;