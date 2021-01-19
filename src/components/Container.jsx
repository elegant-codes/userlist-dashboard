import React, { Component } from 'react'
import Userlist from './Userlist'

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
      users: [],
      filteredUsers:[],
      pageTitle: 'All users',
      searchField: ''
    };
  }

  
  async componentDidMount() {
    this.setState({loading:true});
    await fetch('https://randomuser.me/api/?results=4&seed=fea8be3e64777240')
    .then( response => response.json())
    .then(userslist => this.setState({users: userslist.results, filteredUsers: userslist.results, loading: false}));
  }


  render() {
    const filterUsers = (category)=> {
      if (category === 'male'){
         this.setState({filteredUsers: this.state.users.filter((user) => user.gender === 'male'), pageTitle:'Male Users'});
      } else if (category === 'female') {
        this.setState({filteredUsers: this.state.users.filter((user) => user.gender === 'female'), pageTitle:'Female Users'});
      } else {
       this.setState({filteredUsers: this.state.users, pageTitle:'All Users'});
      }
    }

    const downloadCsv= () =>{
      let csvContent = "data:text/csv;charset=utf-8," 
      + this.state.filteredUsers.map(e => e.join(",")).join("\n");
      var encodedUri = encodeURI(csvContent);
      window.open(encodedUri);
    }

    // const {searchField, filteredUsers} = this.state;
    // const SearchUsers = filteredUsers.filter(user => {
    //   let fullname = user.name.first + ' ' + user.name.last;
    //   fullname.name.toLowerCase().includes(searchField.toLowerCase())
    // });
    // this.setState({filteredUsers: SearchUsers});

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
        <p className="title">{this.state.pageTitle}</p>
        <p>Filter by</p>

        <div className="find-section">
          
          <div className="findContainer">
            <i className="fa fa-search findIcon"></i>
            <input 
            className="findBox" 
            type="search" 
            name="search"
            placeholder="Find in list"
            onChange= {e => {
              this.setState({searchField: e.target.value})
              }
            }

             />
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

        <Userlist users={this.state.filteredUsers} loading={this.state.loading} />
        


        <div className="download-section">
          <button onClick={()=> downloadCsv()} className="download-button"><i className="fas fa-cloud-download-alt"></i>Download results</button>

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
