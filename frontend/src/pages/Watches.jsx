import React, { Component } from 'react';
import Cards from '../components/Cards';
import Marquee from '../components/Marquee';
import HeaderRole from '../components/HeaderRole';
import Navbar from '../components/Navbar';



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
    id: 'w1',
    image: './images/2606WM08_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Multifunction Karishma",
    price: 3000
  },
  {
    id: 'w2',
    image: './images/1805QM04_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Multifunction Karishma",
    price: 4500
  },
  {
    id:'s1',
    image:"./images/90188AP01_1.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999

  },
  {
     id:'s2',
    image:"./images/s2.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
  },
   {
     id:'s3',
    image:"./images/s3.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
   },
   {
    id:'s4',
    image:"./images/s4.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
   },
  {
    id: 'w3',
    image: './images/68035KL01_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Men's Elegance",
    price: 1999
  },
  {
    id: 'w4',
    image: './images/2656WM01_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Minimal Quartz",
    price: 2399
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


export class Watches extends Component {
  render() {
    return (
      <div>
        <div>
          <Marquee/>
          <HeaderRole/>
          <Navbar/>
        </div>
        <div className="d-flex flex-wrap justify-content-center my-5">
          {products.map((Product) => (
            <Cards
              key={Product.id}
              id={Product.id}
              image={Product.image}
              title={Product.title}
              description={Product.description}
              price={Product.price}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Watches;