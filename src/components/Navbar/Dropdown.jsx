import "./Dropdown.css"
/*
Essentials
Tailoring Edit
Dress Code
Summer Wardrobe
Outdoor & Activewear
The Gift Shop
*/
export const Dropdown = () => {
    const Opt1 = ["Curret Week", "Essentials", "Tailoring Edit", "Dress Code", "Summer Wardrobe", "Outdoor & Activewear",
        " The Gift Shop"]
    const Opt2 = ["Clothing", "Shoe", "Bag", "Accessories"]

    return (
        <div>
            <div className="LeftDiv">
                <span>SHOP BY CATEGORY</span>
                <span>JUST IN</span>
            </div>
            <div className="LeftDiv">
                <div>
                    {Opt1.map((e) => <p>{e}</p>)}
                </div>
                <div>
                    {Opt2.map((e) => <p>{e}</p>)}
                </div>
            </div>
            <div></div>
        </div>
    )
}