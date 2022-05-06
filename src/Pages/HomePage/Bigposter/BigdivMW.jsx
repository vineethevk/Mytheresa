import { Link } from 'react-router-dom'
import "./BigdivMW.css"

export const BigdivMW=()=>{
    return(
        // <img className="myimg" src="https://img.mytheresa.com/media/static/raw/cms/l/Gate_Page/march_2022/Gatepage_April22_desktop_2x_20220330160200.jpg?imwidth=1180&imdensity=2" alt="" />
        <Link to="/">
        <div className="myimg">
            <div className="mwDiv">Womans</div>
            <div className="mwDiv">Mens</div>
        </div>
        
    </Link>
    )
        
}