import React from 'react'
import User from './props/User'
import { userOne } from './data/User'
import About from './props/About'
import { contact } from './data/about'
import Profile from './props/Profile'
import { service } from './data/profile'

function Info() {
    let user = ["Akjol", "Ariet", "Kutman", "Fatima"]

    
  return (
    <div>
      {
        user.map((item, index) => ( 
            <div key={index}>{item} {console.log(index)
            }</div>
        ))
      }
     
      {
        userOne.map((item) => (
          <User key={item.id} data={item}/>
        ))
      }
       <div className='user-info'>
      {
        contact.map((item) => (
          <About key={item.id} data={item}/>
        ))
      }
      </div>
      <div className='my'>
      {
        service.map((item) => (
          <Profile key={item.id} data={item}/>
        ))
      }
      </div>
      
    </div>
  )
}

export default Info

