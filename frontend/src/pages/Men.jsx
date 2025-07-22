import React, { Component } from 'react'
import '../pages/home.css';
import Marquee from '../components/Marquee';
import HeaderRole from '../components/HeaderRole';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const products = [
  {
    id: 'm1',
    image: './images/1713BM02_1.jpg',
    title: 'Titan',
    description: "Men's Watch | Titan Multifunction Karishma",
    price: 3000
  },
  {
    id: 'm2',
    image: './images/1805QM04_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Multifunction Karishma",
    price: 4500
  },
  {
    id: 'm3',
    image: './images/1806NM01_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Men's Elegance",
    price: 1999
  },
  {
    id: 'm4',
    image: './images/1825SM11_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Minimal Quartz",
    price: 2399
  }
];



export class Men extends Component {
  render() {
    return (
      <div>
        
        <Marquee/>
        <HeaderRole/>
        <Navbar/>
        
        <div className="d-flex flex-wrap justify-content-center my-4">
      {products.map((product, index) => (
        <Cards
          key={index}
          id={product.id} 
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
        






       
        
      </div>
    )
  }
}

export default Men
