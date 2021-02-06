import React, { Component } from 'react'
import Userpage from './Userpage'
import Userlist from './Userlist'

class ToggleUsers extends Component {
  state= {
    id: null,
    setId: false
  }
  
  setIdClick = (userId) => {
    this.setState({
      id: userId,
      setId: true
    })
  }

  setIdClickNull = () =>{
    this.setState({
      id: null,
      setId: false
    })
  }

  render() {
   if(this.state.setId){
     return(
        <Userpage users={this.props.users} setUserId={this.state.id} setIdClickNull={this.setIdClickNull} />
     )
   }else {
      return(
        <Userlist users={this.props.users} loading={this.props.loading} setIdClick={this.setIdClick} />
      )
   }
  }
}

export default ToggleUsers
