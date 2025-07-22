import React from 'react'
import '../pages/home.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
  <Link to="/men">MEN</Link>
<Link to="/women">WOMEN</Link>
<Link to="/smartwatch">SMART WATCHES</Link>
<Link to="/premium">PREMIUM WATCHES</Link>
<Link to="/watches">WATCHES</Link>
<Link to="/international">INTERNATIONAL BRANDS</Link>
<Link to="/watches">GIFTING</Link>
<Link to="/international">SALE</Link>
<Link to="/watch_services">WATCH SERVICE</Link>
<Link to="/watches">MORE</Link>

</nav>
    </div>
  )
}

export default Navbar
