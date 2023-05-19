import Button from '../button/Button';
import PassCodeInputWarning from '../passCodeInputWarning/PassCodeInputWarning';

type passCodeInputProps = {
    passCode: string;
    setPassCode: Function;
    decryptMnemonic: Function;
    validPassCode: boolean;
}

function PassCodeInput({ passCode, setPassCode, decryptMnemonic, validPassCode }:passCodeInputProps) {

    return (
        <form 
            className="passcode-page"
            onSubmit={(e)=>{e.preventDefault(); decryptMnemonic();}}
        >
            <div className="passcode-description">
                비밀구문은 지갑의 핵심이 되는 부분이에요.<br/>
                사전에 설정한 패스코드와 한 쌍을 이루어서 지갑의 소유
                권을 보장 해주는 역할을 해요.<br/>
                만약 패스코드를 잊어버린 경우 비밀구문을 알아야만 패스
                코드 재설정이 가능하기 때문에 <span className="gn">비밀구문을 미리 안전한 
                곳에 보관해두어야 해요.</span>
            </div>

            <PassCodeInputWarning 
                passCode={passCode}
                setPassCode={setPassCode}
                validPassCode={validPassCode}
            />
            <Button 
                theme="green"
                text="확인하기"
                disabled={!passCode.length}
                type="submit"
            />
        </form>
    )
}
export default PassCodeInput;