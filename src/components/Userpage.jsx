import React from 'react'

function Userpage({users, setUserId, setIdClickNull}) {

  const filteruser = users.filter((user)=> user.id.value === setUserId);
  const user =filteruser[0];
  const handleClickNull =()=> {
    setIdClickNull()
  }
  return (
    <div>
     <div className="result" onClick={handleClickNull} > <i class="fas fa-arrow-left"></i> <span>RESULTS</span></div>
    
    <div className="userContainer">
      <div className="image-wrap">
        <img src={user.picture.large} alt=""/>
      </div>
      <div className="user-details">
        <p className="name">{`${user.name.title}. ${user.name.first} ${user.name.last}`} <span>{`${user.registered.age}`}</span></p>
        <p className="address"> {`${user.location.city} ${user.location.street.number} ${user.location.street.name } ${user.location.state}`} </p>
        <p className="email"> <i className="far fa-envelope"></i><span id="user_email"> {user.email}</span></p>
        <p className="joined">Joined: {`${user.registered.date.substr(0, 10)}`}</p>
        <div className="phone">
         <p><i className="fas fa-phone-alt"></i> {user.phone}</p> 
          <p><i class="fas fa-mobile-alt"> </i> {user.cell}</p>
        </div>
      </div>
    </div>

    

    </div>
    )
}

export default Userpage
