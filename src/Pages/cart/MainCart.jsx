import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Cart.css"

const MainCart = () => {
    const [price, setPrice] = useState(0);
    const data = useSelector((store) => store.cart);
    useEffect(() => {
        data.map((e) => setPrice((price) => price + e.price))

        return (() => {
            setPrice(0);
        })
    })

    return (
        <div className='Cartmain'>
            <div className='Header'>
                <h4>YOUR SHOPPING BAG</h4>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            {data.map((e) => {
                return (
                    <div className='Products'>
                        <div className='ProductImg'>
                            <img src={`${e.images.img1}`} alt="" />
                        </div>
                        <div>
                            <h5>{e.brandName}</h5>
                            <h6>{e.name}</h6>
                        </div>
                        <div className='details'>
                            <p>1 x € {e.price}</p>
                        </div>
                    </div>)

            })}

            <div className='Total'>
                <h5>SubTotal</h5>
                <p>{price}.00</p>
            </div>
        </div>


    )
}

export default MainCart