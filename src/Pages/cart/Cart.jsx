import React from 'react'


import './Cart.css'
const Cart = () => {
  return (
   
    <>
    
    <div className='cart-main-box'  style={{width:350,border:'1px solid lightsteelblue'}}>  
    
    
    <div  style={{margin:'auto'}}>


        <h2 >YOUR SHOPPING BAG</h2>
       
        <button>VIEW SHOPPING BAG</button>
    </div>
    
    <hr />
    
<div  className='product'  style={{display:'flex',justifyContent:'space-between'}}>


  
<div style={{marginRight:50}}>

  <img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1c/P00629177_d2.jpg" alt="" srcset="" style={{width:100}}/>

</div>
<div>
<h5>Givenchy</h5>
<h6>Giv 1 lace-up sneakers</h6>
<p>1 x € 895.00</p>
<button> remove</button>

</div>

</div>
    </div>
    
    </>
  )
}

export default Cart