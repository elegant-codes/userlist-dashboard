import {React, Fragment} from 'react'
import User from './User'

function Userlist({users}) {

  return (
    
    users.map((user)=> (
      <User key={user.login.uuid} 
      image={user.picture.large} 
      fullname={user.name.first + ' ' + user.name.last} 
      address={user.location.city + ',' + user.location.street + ',' + user.location.state}
      email={user.email}
      phone={user.phone}
       />
      
    ))  
   
  )
}

export default Userlist
