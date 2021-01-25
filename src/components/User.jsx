import React from 'react'


function User({image,fullname,address,phone,email, setIdClick, id}) {
  const handleClick = () =>{
    setIdClick(id)
  }
  return (
    <div className="user" >
      <div className="user-image">
        <img src={image} alt=""/>
      </div>

      <div className="details">
        <p className='name'>{fullname}</p>
        <p className='address'>{address}</p>
        <div className="email-phone">
          <i className="far fa-envelope"></i><span id="user_email">{email}</span> <i className="fas fa-phone-alt"></i><span id="user_phone">{phone}</span>
        </div>
      </div>

      <div className="arrow-wrapper">
        <button className="view_more" onClick={()=> handleClick()} ><i className="fas fa-arrow-right"></i></button>
      </div>

    </div>
  )
}

export default User
