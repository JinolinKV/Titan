import React from 'react';
import '../pages/home.css';

import Navbar from '../components/Navbar';
import HeaderRole from '../components/HeaderRole';
import Marquee from '../components/Marquee';
import Carousel from '../components/Carousel'; 
import Cards from '../components/Card';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Home = () => {
  return (
    
    <div>
      
<Marquee/>
<HeaderRole/>
<Navbar/>

<Carousel/>
<Cards/>



</div>


  )
}

export default Home;
