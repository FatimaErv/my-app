import React from 'react'
import "./about.css"

function About({data}) {
  return (
    <div className='items'>
        <div className='item'>

          <h2>{data.category}</h2>
      <p>{data. title}</p>
      <p>{data. price}</p>
      <img src={data. image} alt="" />
     
      <p>{data.discount}</p>
        </div>
    </div>
  )
}

export default About
