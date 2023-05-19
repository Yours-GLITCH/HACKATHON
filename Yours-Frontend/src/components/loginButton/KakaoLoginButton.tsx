import Button from "../button/Button";
import { ReactComponent as KakaoLogo } from '../../asset/svg/kakao-logo.svg';

function KakaoLoginButton() {
    const kakaoLogin = () => {
        let redirectUrl = `${window.location.origin}/oauth`
        window.location.href=`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${redirectUrl}`;
    }

    return (
        <Button 
            text="카카오 계정으로 시작하기"
            onClick={()=>{kakaoLogin()}}
            bgColor="#FAE64C"
            textColor="black"
            icon={<KakaoLogo />}
        />
    )
}
export default KakaoLoginButton;