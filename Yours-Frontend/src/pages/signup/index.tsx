import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { clearRedirectUrl, getRedirectUrl } from "../../utils/function/redirectUrl";
import { generateRandomMnemonic, generateWalletsFromMnemonic } from "../../utils/function/wallet";
import { encryptMnemonic } from "../../utils/function/crypto";
import { usePassCode } from "../../hook/usePassCodeInput";
import { useGetSocialInfo } from "./useGetSocialInfo";
import { setShowAlertInfo } from "../../utils/function/showAlert";
import UserApi from "../../apis/UserApi";
import InputForm from "./InputForm";
import PassCodeInput from "../../components/passCode/PassCodeInput";
import PassCodeConfirm from "../../components/passCode/PassCodeConfirm";
import Loading from "../../components/loading/OverlayLoading";
import { ReactComponent as ArrowLeft } from '../../asset/svg/arrow-left.svg';
import './index.scss';

function Signup() {
    const [searchParams, setSearchParams] = useSearchParams();
    const userApi = new UserApi();
    const navigation = useNavigate();
    const {social, snsId, profileImage, email} = useGetSocialInfo({ failAction: () => getSocialInfoFailAction() });
    const { passCode, setPassCode, isValid } = usePassCode();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nickname, setNickname] = useState('');
    const [agreeToTermList, setAgreeToTermList] = useState<String[]>([]);

    const [loading, setLoading] = useState(false);
    const [pageMode, setPageMode] = useState('PASSCODE');

    const getSocialInfoFailAction = () => {
        navigation('/signup');
        setShowAlertInfo('회원 가입 과정에서 오류가 발생했습니다.\n다시 시도해주세요.', false);
    }

    useEffect(()=>{
        // page mode 설정하기
        setPageMode(searchParams.get('pageMode') || 'INPUT');
    }, [searchParams])

    const goToInput = () => { setSearchParams({...searchParams, pageMode: 'INPUT'}) }
    const goToPassCode = () => { setSearchParams({...searchParams, pageMode: 'PASSCODE'}) }
    const goToConfirmPassCode = () => { setSearchParams({...searchParams, pageMode: 'CONFIRM_PASSCODE'}) }

    const generateWallets = () => {
        const mnemonic = generateRandomMnemonic();
        const wallets:any = generateWalletsFromMnemonic(mnemonic);
        const addressList = [];
        
        for (let chain in wallets) {
            addressList.push({ chainType: chain, address: wallets[chain].address });
        }
        const secret = encryptMnemonic(mnemonic, passCode);

        return { addressList, secret };
    }

    const signup = async () => {
        try {
            setLoading(true);
            const wallets = generateWallets();

            const newUserData = {
                snsId: snsId,
                nickname: nickname,
                profileImage: profileImage,
                email: email,
                phone: phoneNumber.split('-').join(''),
                social: social,
                isMarketing: agreeToTermList.includes('MARKETING'),
                walletAddress: wallets.addressList,
                secret: wallets.secret
            }

            const res = await userApi.signup(newUserData);

            // 회원가입 성공 후 redirect url 또는 마이페이지로 이동
            let redirectUrl = getRedirectUrl();
            localStorage.setItem("newUser", "Hello newbie 😎");
            window.location.href = redirectUrl ? redirectUrl : `/mypage`;
            clearRedirectUrl();
            setLoading(false);
        } catch(err) { 
            setLoading(false);
            setShowAlertInfo("회원가입 과정에서 에러가 발생했습니다.\n다시 시도해주세요", false);
            console.log(err); 
        }
    }

    const pageRenderer = () => {
        switch(pageMode) {
            case 'INPUT':
                return <InputForm 
                    setPhoneNumber={setPhoneNumber}
                    nickname={nickname}
                    setNickname={setNickname}
                    agreeToTermList={agreeToTermList}
                    setAgreeToTermList={setAgreeToTermList}
                    goToNextPage={goToPassCode}
                />
            case 'PASSCODE':
                return <PassCodeInput 
                    title="패스코드 설정"
                    description={"추후 Yours Wallet 안에 들어있는 자산을 거래하거나\n이동하기 위해서는 패스코드를 입력해야 합니다."}
                    passCode={passCode}
                    setPassCode={setPassCode}
                    isValid={isValid}
                    buttonText="다음"
                    buttonAction={goToConfirmPassCode}
                />
            case 'CONFIRM_PASSCODE':
                return <PassCodeConfirm 
                    passCode={passCode}
                    confirmText="시작하기"
                    confirmAction={signup}
                />
            default:
        }
    }

    return (
        <div className="signup">
            { loading && <Loading /> }
            <div className="signup-header">
                <ArrowLeft 
                    className="go-back"
                    onClick={()=>navigation('/landing')}
                />
                <h3>회원가입</h3>
            </div>
            { pageRenderer() }
        </div>
    )
}
export default Signup;