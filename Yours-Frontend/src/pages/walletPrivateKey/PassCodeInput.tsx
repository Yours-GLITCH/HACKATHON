import Button from "../../components/button/Button";
import PassCodeInputWarning from "../../components/passCodeInputWarning/PassCodeInputWarning";

type passCodeInputProps = {
    passCode: string;
    setPassCode: Function;
    validPassCode: boolean;
    submitAction: Function;
}

function PassCodeInput ({ passCode, setPassCode, validPassCode, submitAction }:passCodeInputProps) {

    return (
        <form 
            onSubmit={(e)=>{e.preventDefault(); submitAction()}}
        >
            <PassCodeInputWarning 
                passCode={passCode}
                setPassCode={setPassCode}
                validPassCode={validPassCode}
                warningText="프라이빗키"
            />
            <Button 
                theme="purple"
                disabled={!passCode.length}
                text="다음"
            />
        </form>
    )
}
export default PassCodeInput;