import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export class Logo extends Component {
  render() {
    return (
      
        
          <div >
          <div ClassName='logo'>
          <img src="/images/titan-logo.svg" alt="Titan Logo" />  
          </div>
          <div className='homelogo'>
            
            <Link to="/">
              <img src="/images/home (1).png" alt="Titan Logo" />
            </Link>
          </div>
          </div>
       
    );
  }
}

export default Logo;
