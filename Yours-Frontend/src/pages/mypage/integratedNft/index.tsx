import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import chainList from '../../../utils/data/chainList';
import { ReactComponent as PlusIcon } from '../../../asset/svg/plus-circle.svg';
import './index.scss';

function IntegratedNftContainer() {
    const navigation = useNavigate();
    const integratedNftList = useSelector((state:any)=>state.nft.integratedNftList);

    return (
        <div className="integrated-nft-container">
            {
                integratedNftList.length
                ? <>
                <div className="integrated-nft-button-wrapper">
                    <button
                        className="integrated-nft-button"
                        style={{background: 'linear-gradient(227.26deg, rgba(97, 133, 238, 0.4) 25.99%, rgba(88, 79, 199, 0.4) 231.45%)'}}
                        onClick={()=>{navigation('/integrated-nft/create')}}
                    >
                        <PlusIcon />
                    </button>
                </div>
                {
                    integratedNftList.map((nft:any, idx:number)=>(
                        <div className="integrated-nft-button-wrapper">
                        <button
                            className="integrated-nft-button"
                            id={nft.chainType}
                            key={idx}
                            style={{background: chainList.find((el:any)=>el.name===nft.chainType)?.color}}
                            onClick={()=>{navigation(`/integrated-nft/${nft.integratedNftId}`)}}
                        >
                            <span className="integrated-nft-name">YOURS #{nft.integratedNftId.toString().padStart(4, '0')}</span>
                            { chainList.find((el:any)=>el.name===nft.chainType)?.icon }
                        </button>
                        </div>
                    ))
                }
                </>
                : <button
                    className="integrated-nft-button create-nft"
                    onClick={()=>{navigation('/integrated-nft/create')}}
                >
                    Create<br/>Integrated<br/>NFT
                </button>
            }
        </div>
    )
}
export default IntegratedNftContainer;