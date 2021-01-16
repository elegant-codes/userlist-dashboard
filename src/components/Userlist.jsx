import {React} from 'react'
import User from './User'

function Userlist({users}) {

  return (
    
    users.map((user)=> (
      <User key={user.id.value + Math.random(1)} 
      image={user.picture.large} 
      fullname={user.name.first + ' ' + user.name.last} 
      address={user.location.city + ', ' + user.location.street.number + ' ' + user.location.street.name  + ', ' + user.location.state}
      email={user.email}
      phone={user.phone}
       />
      
    ))  
   
  )
}

export default Userlist
