import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai'
import './TopNav.css'
export const TopNav = () => {
    return (
        <div className='TopNav'>
            <div className="TopLeft">
                <ul>
                    <li><Link to="/women">WOMEN</Link></li>
                    <li><Link to="/men">MEN</Link></li>
                    <li><Link to="/">KIDS</Link></li>
                </ul>
            </div>
            <div className='TopRight'>
                <ul>
                    <li><Link to="/">Signup for Newsletter</Link></li>
                    <li><Link to="/login">My account</Link></li>
                    <li><Link to="/">My wishlist {<AiOutlineHeart />}</Link></li>
                    <li><Link to="/">International | English</Link></li>
                </ul>
            </div>
        </div>
    )
}