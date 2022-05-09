import { useNavigate } from "react-router-dom"
import "./Payment.css"


export const Payment=()=>{
    const Navigate=useNavigate()
    return (
        <div className="maindiv">
            <h1 className="head">Payment Gateway</h1>
            <label htmlFor="">Name</label>
            <input type="text"  placeholder="Enter Full Name"/>
            <br />
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Enter address"/>
            <br />
            <label htmlFor="">Card Number</label>
            <input type="number" placeholder="Enter address"/>
            <br />
            <label htmlFor="">pin</label>
            <input type="password" placeholder="Enter address"/>
            <br />
            <button className="mybutton" onClick={()=>{
                alert("Payment Successfull")
                window.location.href="/"
                
            }}>Submit</button>
        </div>
    )
}