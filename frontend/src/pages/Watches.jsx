import React, { Component } from 'react';
import Cards from '../components/Cards';
import Marquee from '../components/Marquee';
import HeaderRole from '../components/HeaderRole';
import Navbar from '../components/Navbar';



const Products = [
  {
    productId: 'm001',
    image: './images/1713BM02_1.jpg',
    title: 'Titan',
    description: "Men's Watch | Titan Multifunction Karishma",
    price: 3000
  },
  {
    productId: 'm002',
    image: './images/1805QM04_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Multifunction Karishma",
    price: 4500
  },
  {
    productId: 'w001',
    image: './images/2606WM08_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Multifunction Karishma",
    price: 3000
  },
  {
    productId: 'w002',
    image: './images/1805QM04_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Multifunction Karishma",
    price: 4500
  },
  {
    productId:'s001',
    image:"./images/90188AP01_1.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999

  },
  {
    productId:'s002',
    image:"./images/s2.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
  },
   {
    productId:'s003',
    image:"./images/s3.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
   },
   {
    productId:'s004',
    image:"./images/s4.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
   },
  {
    productId: 'w003',
    image: './images/68035KL01_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Men's Elegance",
    price: 1999
  },
  {
    productId: 'w004',
    image: './images/2656WM01_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Minimal Quartz",
    price: 2399
  },
  {
    productId: 'm003',
    image: './images/1806NM01_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Men's Elegance",
    price: 1999
  },
  {
    productId: 'm004',
    image: './images/1825SM11_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Minimal Quartz",
    price: 2399
  }
];


const Watches =()=> {
  return (
    <div>
   <Marquee />
      <HeaderRole />
      <Navbar />
      <div className="d-flex flex-wrap justify-content-center my-4">
        {Products.map((item) => (
          <Cards
            key={item.productId}
            productId={item.productId}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Watches;