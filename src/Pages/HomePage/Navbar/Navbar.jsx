import { TopNav } from "./TopNav"
import './Navbar.css'
import { MiddleNav } from "./MiddleNav"
import { Hrline } from "./Hrline"


export const Navbar = () => {
    return <div className="Navbar">
        <TopNav />
        <MiddleNav />
        <Hrline/>
        <br />
        
    </div>
}