import React from 'react'

function SearchPanel({filterUsers}) {
  
  return (
    <div className="search-panel">
            <p className="greetings">Hello, <span id='username'>Emerald</span></p>
            <p>Welcome to your dashboard, kindly sort through the base</p>

            <div className="searchContainer">
              <i className="fa fa-search searchIcon"></i>
              <input className="searchBox" type="search" name="search" placeholder="Find a user"/>
            </div>

            <div className="showUsers">
              <p>Show users</p>
              <ul className="category-list">
                <li className="all-users">
                  <button className="img-wrapper" onClick={()=> filterUsers('all')} >
                    <i className="fas fa-users"></i>
                  </button>
                  <p>All Users</p>
                </li>

                <li className="male-users" onClick={()=> filterUsers('male')}>
                  <button className="img-wrapper" >
                    <i className="fas fa-male"></i>
                  </button>
                  <p>Male Users</p>
                </li>

                <li className="female-users" onClick={()=> filterUsers('female')} >
                  <button className="img-wrapper">
                    <i className="fas fa-female"></i>
                  </button>
                  <p>Female Users</p>
                </li>
              </ul>
            </div>
        </div>
  )
}

export default SearchPanel
