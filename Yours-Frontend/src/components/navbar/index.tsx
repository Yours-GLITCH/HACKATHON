import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../asset/svg/logo.svg';
import { ReactComponent as PlusIcon } from '../../asset/svg/plus-circle.svg';
import userDefaultProfile from '../../asset/image/user-default-profile.png';
import './index.scss';

interface NavbarProps {
    /**
     * Whether user is authenticated
     */
    auth: boolean,
    /**
     * User profile image URL
    */
    profileImage: string
}

/**
 * Navbar UI component
 */
function Navbar({ auth, profileImage } : NavbarProps) {
    const navigation = useNavigate();

    return (
        <div className="navbar" id="navbar">
            <Logo 
                className="navbar-logo"
                onClick={()=>navigation('/mypage')}
            />
            {
                auth && 
                <div className="navbar-right-wrapper">
                    <button 
                        className="navbar-create-badge"
                        onClick={()=>{navigation('/nft/create')}}
                    >
                        Create NFT <PlusIcon/>
                    </button>
                    <img 
                        className="navbar-profile-image" 
                        src={profileImage} 
                        onClick={()=>navigation('/mypage')}
                        onError={(e)=>{e.currentTarget.src=userDefaultProfile}}
                    />
                </div>
            }
        </div>
    )
}
export default Navbar;