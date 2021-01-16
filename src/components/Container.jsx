import React, { Component } from 'react'
import Userlist from './Userlist'

export class Container extends Component {
  constructor() {
    super();

    this.state= {
      users: [
        {
          "gender": "male",
          "name": {
            "title": "mr",
            "first": "brad",
            "last": "gibson"
          },
          "location": {
            "street": "9278 new road",
            "city": "kilcoole",
            "state": "waterford",
            "postcode": "93027",
            "coordinates": {
              "latitude": "20.9267",
              "longitude": "-7.9310"
            },
            "timezone": {
              "offset": "-3:30",
              "description": "Newfoundland"
            }
          },
          "email": "brad.gibson@example.com",
          "login": {
            "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
            "username": "silverswan131",
            "password": "firewall",
            "salt": "TQA1Gz7x",
            "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
            "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
            "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
          },
          "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
          },
          "registered": {
            "date": "2002-05-21T10:59:49.966Z",
            "age": 17
          },
          "phone": "011-962-7516",
          "cell": "081-454-0666",
          "id": {
            "name": "PPS",
            "value": "0390511T"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/men/75.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
          },
          "nat": "IE"
        }
      ]

    };
  }
  render() {
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
                  <a href="#" className="img-wrapper">
                    <i className="fas fa-users"></i>
                  </a>
                  <p>All Users</p>
                </li>

                <li className="male-users">
                  <a href="#" className="img-wrapper">
                    <i className="fas fa-male"></i>
                  </a>
                  <p>Male Users</p>
                </li>

                <li className="female-users">
                  <a href="#" className="img-wrapper">
                    <i className="fas fa-female"></i>
                  </a>
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

        <Userlist users={this.state.users}/>
        


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
