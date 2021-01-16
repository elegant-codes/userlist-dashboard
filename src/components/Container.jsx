import React, { Component } from 'react'
import Userlist from './Userlist'

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state= {
      users: [],
      filteredUsers:[]
    };
  }

  
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=4&seed=fea8be3e64777240')
    .then( response => response.json())
    .then(userslist => this.setState({users: userslist.results, filteredUsers: userslist.results}));
  }


  render() {
    const filterUsers = (category)=> {
      if (category === 'male'){
         this.setState({filteredUsers: this.state.users.filter((user) => user.gender === 'male')});
      } else if (category === 'female') {
        this.setState({filteredUsers: this.state.users.filter((user) => user.gender === 'female') });
      } else {
       this.setState({filteredUsers: this.state.users});
      }
    }

    return (
      <div className="container">
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

      
      <div className="result-panel">
        <p className="title">All Users</p>
        <p>Filter by</p>

        <div className="find-section">
          
          <div className="findContainer">
            <i className="fa fa-search findIcon"></i>
            <input className="findBox" type="search" name="search" placeholder="Find in list"/>
          </div>
        
          <div className="custom-select" >
            <select>
              <option value="0"> Country</option>
              <option value="1">UK</option>
              <option value="2">NG</option>
            </select>
          </div>
          
          <div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="show-country">Show Country</span>
          </div>
        </div>

        <Userlist users={this.state.filteredUsers}/>
        


        <div className="download-section">
          <a href="" className="download-button"><i className="fas fa-cloud-download-alt"></i>Download results</a>

          <div className="pagination">
            <a href="" className="previous"><i className="fas fa-angle-left"></i></a>
            <a href=""className='next'><i className="fas fa-angle-right"></i></a>
          </div>
        </div>

      </div>

      </div>
    )
  }
}

export default Container
