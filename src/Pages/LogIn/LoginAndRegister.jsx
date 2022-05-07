import { Login } from "./LogIn"
import "./Login.css"
import { Register } from "./Register"
export const LoginAndRegister = () => {
    return (
        <div className="Main">
            <div><Register /></div>
            <div><Login /></div>
        </div>
    )
}