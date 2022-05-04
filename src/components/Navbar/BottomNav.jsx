import { Link } from "react-router-dom";
import "./BottomNav.css";
import { GoSearch } from 'react-icons/go'
import { useState } from "react";
import { Test } from "../../Pages/Test";

export const BottomNav = () => {
    const [search, setSearch] = useState(false);

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
                {search ? <div><input type={"text"} placeholder="Search for ..." /><button><GoSearch /></button></div> : <button onClick={() => setSearch(true)}><GoSearch /></button>}
            </div>

        </div>
    )
}