import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../redux/alert/alertAction';
import Alert from "./Alert";

function AlertHandler() {
    const dispatch = useDispatch();
    const showAlert = useSelector((state:any)=>state.alert.showAlert);
    const alertText = useSelector((state:any)=>state.alert.alertText);
    const positiveState = useSelector((state:any)=>state.alert.positiveState);

    useEffect(()=>{
        let timer:any;
        if (showAlert) {
            timer = setTimeout(()=>{
                dispatch(closeAlert());
            }, 3000);
        }
        return () => {
            clearTimeout(timer);
        }
    }, [showAlert])

    return (
        <Alert 
            showAlert={showAlert}
            alertText={alertText}
            positiveState={positiveState}
        />
    )
}
export default AlertHandler;