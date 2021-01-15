import './App.css';

function App() {
  return (
    <div className="App">
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
              <input type="checkbox" checked/>
              <span className="slider round"></span>
            </label>
            <span className="show-country">Show Country</span>
          </div>
        </div>
        

        <div className="user">
          <div className="user-image">
            <img src="asset/male-profile-avatar.jpg" alt=""/>
          </div>

          <div className="details">
            <p className='name'>Shalom Chioma</p>
            <p className='address'>9278 new road, kilcoole, waterford</p>
            <div className="email-phone">
              <i className="far fa-envelope"></i><span id="user_email">brad.gibson@example.com</span> <i className="fas fa-phone-alt"></i><span id="user_phone">212-232-3343</span>
            </div>
          </div>

          <div className="arrow-wrapper">
            <a href="" className="view_more"><i className="fas fa-arrow-right"></i></a>
          </div>

        </div>


        <div className="download-section">
          <a href="" className="download-button"><i className="fas fa-cloud-download-alt"></i>Download results</a>

          <div className="pagination">
            <a href="" className="previous"><i className="fas fa-angle-left"></i></a>
            <a href=""className='next'><i className="fas fa-angle-right"></i></a>
          </div>
        </div>

      </div>

      </div>
    </div>
  );
}

export default App;
