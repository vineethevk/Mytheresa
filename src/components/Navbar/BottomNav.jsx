import { Link } from "react-router-dom";
import "./BottomNav.css";
import { GoSearch } from 'react-icons/go'
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "./Dropdown";
import { useSelector } from "react-redux";


export const BottomNav = ({ data }) => {
    const cart = useSelector((store) => store.cart)
    const option = data

    const [search, setSearch] = useState(false);
    const [sticky, setSticky] = useState(false);
    const ref = useRef(null);

    const handleChange = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleChange)

        return () => {
            window.removeEventListener('scroll', handleChange)
        }
    }, [])



    return (
        <div className="MainBottomNav">
            <div className="BottomNav" ref={ref}>
                <div>
                    <ul>
                        <li className="A"><Link to="/">NEW ARRIVALS{<Dropdown item={option[0]} />}</Link></li>
                        <li className="A"><Link to="/">DESIGNERS{<Dropdown item={option[1]} />}</Link></li>
                        <li className="A"><Link to="/">CLOTHING{<Dropdown item={option[2]} />}</Link></li>
                        <li className="A"><Link to="/">SHOES{<Dropdown item={option[3]} />}</Link></li>
                        <li className="A"><Link to="/">BAGS{<Dropdown item={option[4]} />}</Link></li>
                        <li className="A"><Link to="/">ACCESSORIES{<Dropdown item={option[5]} />}</Link></li>
                        {option[6] ? (<li className="A"><Link to="/">JEWELRY{<Dropdown item={option[6]} />}</Link></li>) : ""}
                    </ul>
                </div>
                <div className="BottomRight">
                    {sticky ? <span className='CartIcon'>{cart.length}</span> : <div className="Searchbar">
                        {search ? <div><input type={"text"} placeholder="Search for ..." /><button><GoSearch /></button></div> : <button onClick={() => setSearch(true)}><GoSearch /></button>}
                    </div>}
                </div>
                {/* <div className="BottomRight">
                    <div className="Searchbar">
                        {search ? <div><input type={"text"} placeholder="Search for ..." /><button><GoSearch /></button></div> : <button onClick={() => setSearch(true)}><GoSearch /></button>}
                    </div>
                </div> */}
            </div>
            <div className="Gap"></div>
        </div>
    )
}