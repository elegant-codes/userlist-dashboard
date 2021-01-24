import React, { Component } from 'react'
import User from './User'
import Userlist from './Userlist'

class ToggleUsers extends Component {
  state= {
    id: null,
    setId: false
  }
  render() {
   if(this.state.setId){
     return(
        <User id={this.props.id} />
     )
   }else {
      return(
        <Userlist users={this.props.users} loading={this.props.loading} />
      )
   }
  }
}

export default ToggleUsers
