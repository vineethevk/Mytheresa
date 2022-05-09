import React from 'react'

const MainCart = () => {
  return (
   <div>
<div  >

<h2>YOUR SHOPPING BAG</h2>
<button  style={{display:'flex' , width:250,marginLeft:1200}}>PROCEED TO CHECKOUT</button>
</div>

<div style={{display:'flex' ,margin:'auto'}}>

    <div   style={{display:'flex'}}>
        <div> 
        <img src="https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1c/P00629177_d2.jpg" alt="" srcset="" style={{width:100}}/>

        </div>
        <div>
        <h5>Givenchy</h5>
            <h6>Giv 1 lace-up sneakers</h6>
            <p>1 x € 895.00</p>
            <button> remove</button>
        </div>
    </div>


    <div    style={{display:'flex'}}>

      <div>
<h6>Price</h6>
      <p>895</p>
      </div>
      <div>
          <h6>Quantity</h6>
          <p> 2 </p>
      </div>
      <div>
          <h6>SubTotal</h6>
<p>1790.00</p>

      </div>






    </div>
</div>
   </div>

  )
}

export default MainCart