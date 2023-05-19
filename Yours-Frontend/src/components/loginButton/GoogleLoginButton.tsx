import { useGoogleLogin } from '@react-oauth/google';
import UserApi from '../../apis/UserApi';
import { setShowAlertInfo } from '../../utils/function/showAlert';
import Button from '../button/Button';
import { ReactComponent as GoogleLogo } from '../../asset/svg/google-logo.svg';

function GoogleLoginButton() {
    const userApi = new UserApi();
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => { userApi.loginHandler('GOOGLE', codeResponse.access_token); },
        onError: (error) => { setShowAlertInfo('로그인에 실패했습니다.\n다시 시도해주세요.', false) }
    });


    return (
        <Button
            text="구글 계정으로 시작하기"
            theme="white"
            onClick={()=>login()}
            icon={<GoogleLogo className="google-logo"/>}
        />
    )
}
export default GoogleLoginButton;