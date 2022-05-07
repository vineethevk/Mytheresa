import { Link } from "react-router-dom"
import "./Dropdown.css"
export const Dropdown = ({ item: { data } }) => {


    return (
        <div className="Dropdown">
            <div className="Title">
                <div>{data.title1}</div>
                <div>{data.title2}</div>
                <div>{data.title3}</div>
            </div>
            <div className="option">
                <div>{data.option1.map((e) => <p key={e}><Link to="/">{e}</Link></p>)}</div>
                <div>{data.option2.map((e) => <p key={e}><Link to='/'>{e}</Link></p>)}</div>
                <div>{data.option3.map((e) => <p key={e}><Link to='/'>{e}</Link></p>)}</div>
                <div id="Image" style={{ backgroundImage: `url(${data.background})` }}>
                    <div id="ImageText">
                        <h1>{data.h1}</h1>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

