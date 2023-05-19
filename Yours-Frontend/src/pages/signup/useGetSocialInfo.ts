import axios from "axios";
import { useEffect, useState } from "react"

interface useGetSocialInfoProps {
    failAction?: () => void;
}

export const useGetSocialInfo = ({ failAction }:useGetSocialInfoProps) => {
    const [social, setSocial] = useState(''); // KAKAO, GOOGLE
    const [snsId, setSnsId] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [email, setEmail] = useState('');

    const getKakaoInfo = async (kakaoToken:string) => {
        // kakao sns id, profile image, email 받아오기
        try {
            const kakaoInfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
                headers: {
                  Authorization: `Bearer ${kakaoToken}`
                }
            })
            setSocial('KAKAO');
            setSnsId(kakaoInfo.data.id.toString());
            setProfileImage(kakaoInfo.data.properties.profile_image);
            setEmail(kakaoInfo.data.kakao_account.email);
        } catch(err) {
            // kakao token이 잘못되었을 시 landing 페이지로 가도록 -> 유효한 카카오 로그인을 통해서만 회원가입 가능하도록
            console.log(err);
            failAction && failAction();
        }
    }

    const getGoogleInfo = async (googleToken:string) => {
        // google sns id, profile image, email 받아오기
        try {
            const googleInfo = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleToken}`, {
                headers: {
                    Authorization: `Bearer ${googleToken}`,
                    Accept: 'application/json'
                }
            })
            setSocial('GOOGLE');
            setSnsId(googleInfo.data.id);
            setProfileImage(googleInfo.data.picture);
            setEmail(googleInfo.data.email);
        } catch(err) {
            // google token이 잘못되었을 시 landing 페이지로 가도록 -> 유효한 카카오 로그인을 통해서만 회원가입 가능하도록
            console.log(err);
            failAction && failAction();
        }
    }

    useEffect(()=>{
        const kakaoToken = new URLSearchParams(window.location.search).get('KAKAO');
        const googleToken = new URLSearchParams(window.location.search).get('GOOGLE');

        if (kakaoToken?.length)
            getKakaoInfo(kakaoToken);
        else if (googleToken?.length)
            getGoogleInfo(googleToken);
        else
            failAction && failAction();
    }, [])

    return {social, snsId, profileImage, email};
}