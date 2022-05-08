import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Login.css'

export const Register = () => {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        alert("You have registered successfully")
        // navigate("/login")


    }


    return (
        <form onSubmit={handleSubmit}>
            <p className="Heading">CREATE AN ACCOUNT</p>
            <p>Please enter the following information to create your account.</p>
            <input type={"radio"} value={"Ms."} name="gender" /><label>Ms.</label>
            <input type={"radio"} value={"Mrs."} name="gender" /><label>Mrs.</label>
            <input type={"radio"} value={"Mr."} name="gender" /><label>Mr.</label><br />
            <select className="Input">
                <option>academic title</option>
                <option>Dr.</option>
                <option>Prof.</option>
                <option>Prof. Dr.</option>
            </select><br />
            <input className="Input" onChange={handleChange} type={"text"} name="firstname" placeholder="first name *" /><br />
            <input className="Input" onChange={handleChange} type={"text"} name="lastname" placeholder="last name *" /><br />
            <input className="Input" onChange={handleChange} type={"text"} name="email" placeholder="email address *" /><br />
            <input className="Input" onChange={handleChange} type={"password"} name="password" placeholder="password *" /><br />
            {/* <input onChange={handleChange} type={"password"} name="confirm" placeholder="confirm password *" /><br /> */}
            <input type={"checkbox"} name="check" />
            <label> From now on I will receive the Mytheresa Newsletter with selected fashion offers. If I do not wish to receive the newsletter, I can unsubscribe at any time free of charge at privacy@mytheresa.com.</label>
            <p>I agree that Mytheresa may insert analytical web beacons into the newsletter and create a personalized user profile based on my purchase and usage behavior, including sending a notification when I have placed something in the shopping cart. Further details can be found in our Privacy Policy, clause 5. I understand that I can revoke my consent at any time by emailing privacy@mytheresa.com.</p>
            <p>* required fields</p>
            <input className="Registerbtn" type="submit" value={"REGISTER"} />
        </form>
    )
}