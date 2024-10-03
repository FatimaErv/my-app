 import React from 'react'
 import "./Item.css"
 
 function Item(props) {
    console.log(props);
    
   return (
     <div className='item' style={{width:"400px", height:"140px", backgroundColor:"green"}}>
       Hello I'm from {props.city} 
       <h2 className='box'>{props.title}</h2>
       <span>{props.age}</span>
     </div>
   )
 }
 
 export default Item
 