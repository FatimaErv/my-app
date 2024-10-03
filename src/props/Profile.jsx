import React from 'react'
import "./profile.css"


function Profile({data}) {
  return (
    <div className={`server ${data.active ? "green" : "red"}`}>
        <img src={data.image} alt="" />
      <div className='cont'>
        <h1>{data.name}</h1>
      <p>{data.price}</p>
      </div>
      <div className='cont2'>
       <span>{data.numReviews}</span>
      <span>({data.rating})</span>
      </div>
    </div>
  )
}

export default Profile