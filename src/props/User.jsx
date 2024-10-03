import React from 'react'

function User({data}) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.age}</p>
      <img src={data.image} alt="" />
    </div>
  )
}

export default User
