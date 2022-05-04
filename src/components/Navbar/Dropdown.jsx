import { Link } from "react-router-dom"
import "./Dropdown.css"
export const Dropdown = ({ data }) => {
    // const dropdown = {
    //     title1: "SHOP BY CATEGORY",
    //     option1: ["Curret Week", "Essentials", "Tailoring Edit", "Dress Code", "Summer Wardrobe", "Outdoor & Activewear", " The Gift Shop"],
    //     title2: "JUST IN",
    //     option2: ["Clothing", "Shoe", "Bag", "Accessories"],
    //     h1: "NEW ARRIVALS",
    //     background: "https://img.mytheresa.com/media/static/raw/cms/l/MW_FLYOUT_CW17_2022/NA_FLYOUT-_19__20220428121816.jpg"

    //   }

    return (
        <div className="Dropdown">
            <div className="Title">
                <div>{data.title1}</div>
                <div>{data.title2}</div>
            </div>
            <div className="option">
                <div>{data.option1.map((e) => <p key={e}><Link to="/">{e}</Link></p>)}</div>
                <div>{data.option2.map((e) => <p key={e}><Link to='/'>{e}</Link></p>)}</div>
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

