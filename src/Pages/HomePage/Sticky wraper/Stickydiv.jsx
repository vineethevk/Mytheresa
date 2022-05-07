import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'
import "./Stickydiv.css"
export const Stickydiv=()=>{

    let [mytext,setMytext]=useState(true)
   

    let mn=setInterval(() => {

        setMytext(!mytext)
        
        
        clearInterval(mn)
    }, 5000);

    let abc=(
        <div>{mytext?"FREE SHIPPING on orders over €800":"Free returns within 30 days"}</div>
    )



    useEffect(()=>{

       abc

        
      },[mytext])

    return(

        <Link to="/">
                    <div className="mystickytext">{abc}</div>
                </Link>
        
    )
}
