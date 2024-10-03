import React from 'react'

function Petinfo(props) {
    const {name, age, img} = props
  return (
    <div className='name'>
      <p className='p' style={{paddingBottom: "20px"}}>My name is {name} and my age is {age}</p>
      <img className='image' style={{width: "150px", height: "100px"}} src={img} alt="" />
    </div>
  )
}

export default Petinfo
