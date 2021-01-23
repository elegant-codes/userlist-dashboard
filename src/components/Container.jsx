import React, { Component } from 'react'
import SearchPanel from './SearchPanel'
import ResultPanel from './ResultPanel'

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

   filterUsers = (category)=> {
    if (category === 'male'){
       this.setState({filteredUsers: this.state.users.filter((user) => user.gender === 'male'), pageTitle:'Male Users'});
    } else if (category === 'female') {
      this.setState({filteredUsers: this.state.users.filter((user) => user.gender === 'female'), pageTitle:'Female Users'});
    } else {
     this.setState({filteredUsers: this.state.users, pageTitle:'All Users'});
    }
  }

  render() {

    // const {searchField, filteredUsers} = this.state;
    // const SearchUsers = filteredUsers.filter(user => {
    //   let fullname = user.name.first + ' ' + user.name.last;
    //   fullname.name.toLowerCase().includes(searchField.toLowerCase())
    // });
    // this.setState({filteredUsers: SearchUsers});

    return (
      <div className="container">
          
      <SearchPanel filterUsers= {this.filterUsers} />
      <ResultPanel pageTitle={this.state.pageTitle} filteredUsers={this.state.filteredUsers} loading={this.state.loading} />
      

      </div>
    )
  }
}

export default Container
