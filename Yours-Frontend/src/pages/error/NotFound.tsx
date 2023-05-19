import { useNavigate } from 'react-router-dom';
import notFoundImg from '../../asset/image/not-found.png';
import Button from '../../components/button/Button';
import './NotFound.scss';

function NotFound () {
    const navigation = useNavigate();

    return (
        <div className="not-found-page">
            <img src={notFoundImg}/>
            <h2>존재하지 않는 페이지입니다</h2>

            <Button 
                theme="purple"
                onClick={()=>{navigation('/')}}
                text="나가기"
            />
        </div>
    )
}
export default NotFound;