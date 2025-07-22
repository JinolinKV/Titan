import React, { Component } from 'react'
import '../pages/home.css';

import { Link } from 'react-router-dom';

export class Marquee extends Component {
  render() {
    return (
      <div>
        <div className="scroll">
          <Link to='/scroll'>
<marquee behavior="scroll" direction="left" scrollamount="10">
  <span>Use Code  </span>
  <span><strong>NEW10   </strong></span>
  <span>and get <strong>  10% OFF*   </strong></span>
  <span> on non-discounted watches over Rs. 2499. Maximum Discount: Rs. 1200. T&C Apply.</span>
</marquee>
</Link>
</div>
      </div>
    )
  }
}

export default Marquee
