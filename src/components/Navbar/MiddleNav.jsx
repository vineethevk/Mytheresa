import { Link } from 'react-router-dom'
import './MiddleNav.css'
export const MiddleNav = () => {
    return (
        <div className='MiddleNav'>
            <div className="MiddleNavLogo">
                <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220420T172422" />
            </div>
            <div className='Cart'>
                <Link to="/">
                    <span>SHOPPING BAG</span>
                    <span className='CartIcon'>0</span>
                </Link>

            </div>
        </div>
    )
}