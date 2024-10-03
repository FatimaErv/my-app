import React from 'react'
import "./product.css"

function Product({image, name, skidka, price}) {
  return (
    <div>
     <div className='boxes'>
     <div className='box'>
     <img src={image} alt="" />
     <div className='box1'>
     <h3>{name}</h3>
     <h4>{price}</h4>
     </div>
      <button>Buy</button>
      <p>{skidka}%</p>
     </div>
     </div>
    </div>
  )
}

export default Product
