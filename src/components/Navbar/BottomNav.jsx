import { Link } from "react-router-dom";
import "./BottomNav.css";
import { GoSearch } from 'react-icons/go'

export const BottomNav = () => {
    return (
        <div className="BottomNav">
            <div>
                <ul>
                    <li><Link to="/">NEW ARRIVALS</Link></li>
                    <li><Link to="/">DESIGNERS</Link></li>
                    <li><Link to="/">CLOTHING</Link></li>
                    <li><Link to="/">SHOES</Link></li>
                    <li><Link to="/">BAGS</Link></li>
                    <li><Link to="/">ACCESSORIES</Link></li>
                    <li><Link to="/">SALE</Link></li>
                </ul>
            </div>
            <div className="Searchbar">
                <input type={"text"} placeholder="Search for ..." /><button><GoSearch /></button>
            </div>
        </div>
    )
}