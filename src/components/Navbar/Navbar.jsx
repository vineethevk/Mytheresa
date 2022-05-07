import { TopNav } from "./TopNav"
import './Navbar.css'
import { MiddleNav } from "./MiddleNav"
import { BottomNav } from "./BottomNav"

export const Navbar = () => {
    return <div className="Navbar">
        <TopNav />
        <MiddleNav />
    </div>
}