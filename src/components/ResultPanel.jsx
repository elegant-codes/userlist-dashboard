import React from 'react';
import DownloadButton from './DownloadButton'
import ToggleUsers from './ToggleUsers'

function ResultPanel({pageTitle, filteredUsers, loading}) {
 
  return (
    <div className="result-panel">
        <p className="title">{pageTitle}</p>
        <p>Filter by</p>

        <div className="find-section">
          
          <div className="findContainer">
            <i className="fa fa-search findIcon"></i>
            <input 
            className="findBox" 
            type="search" 
            name="search"
            placeholder="Find in list"

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
       
            <ToggleUsers users={filteredUsers} loading={loading} />
  
        <div className="download-section">
            <DownloadButton results={filteredUsers} />

          <div className="pagination">
            <a href="" className="previous"><i className="fas fa-angle-left"></i></a>
            <a href=""className='next'><i className="fas fa-angle-right"></i></a>
          </div>
        </div>

      </div>
  )
}

export default ResultPanel
