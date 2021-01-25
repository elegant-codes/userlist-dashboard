import React from 'react'
import User from './User'
import Spinner from './Spinner'

function Userlist({users, loading, setIdClick}) {
    if(loading){
      return <Spinner />
    }else {
     return ( users.map((user)=> (
      <User key={user.id.value} 
      image={user.picture.large} 
      fullname={user.name.first + ' ' + user.name.last} 
      address={user.location.city + ', ' + user.location.street.number + ' ' + user.location.street.name  + ', ' + user.location.state}
      email={user.email}
      phone={user.phone}
      setIdClick={setIdClick}
      id={user.id.value}
       />
      
    ))) 
    }
}

export default Userlist
