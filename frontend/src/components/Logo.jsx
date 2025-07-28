import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export class Logo extends Component {
  render() {
    return (
      <div className="d-flex align-items-center gap-3 p-2"> {/* Bootstrap Flex Row */}
        <div className='logo'>
          <img src="./images/titan-logo.svg" alt="Titan Logo" height="50" />  
        </div>
        <div className='homelogo'>
          <Link to="/">
            <img src="./images/home (1).png" alt="Home Icon" height="40" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Logo;
