import { useState } from 'react'
import "./Login.css"

export const Login = () => {

    const handleChange = (e) => {
        const [formdata, setFormdata] = useState({
            email: "",
            password: "",
        });
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    return (
        <form>
            <p className="Heading">ALREADY REGISTERED?</p>
            <p>If you have an account with us, please log in.</p>
            <input className="Input" onChange={handleChange} type={"text"} name="email" placeholder="email address *" /><br />
            <input className="Input" onChange={handleChange} type={"password"} name="password" placeholder="password *" /><br />
            <br />
            <input type="submit" value={"LOGIN"} />
            <br />
            <p>At Mytheresa, we keep your information secure. As a result, it will be necessary for you to log in to your account before you are able to place an order or change the information on your account. You will be asked to log in to complete your order even if you have already been greeted on the website.
            </p>
        </form>
    )
}

