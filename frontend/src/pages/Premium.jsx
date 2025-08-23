import React, { Component } from 'react'
import Cards from '../components/Cards';
import Marquee from '../components/Marquee';
import HeaderRole from '../components/HeaderRole';
import Navbar from '../components/Navbar';
const Products=[
  {
    productId:'s01',
    image:"./images/90188AP01_1.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999

  },
   {
    productId: 'm01',
    image: './images/1713BM02_1.jpg',
    title: 'Titan',
    description: "Men's Watch | Titan Multifunction Karishma",
    price: 3000
  },
   {
    productId: 'w01',
    image: './images/68035KL01_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Men's Elegance",
    price: 1999
  },
 
 
  {
     productId:'s02',
    image:"./images/s2.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
  },
   {
    productId: 'm02',
    image: './images/1805QM04_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Multifunction Karishma",
    price: 4500
  },
   {
    productId:'s03',
    image:"./images/s3.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
   },
   {
    productId:'s04',
    image:"./images/s4.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
   },
    {
    productId: 'w03',
    image: './images/2656WM01_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Minimal Quartz",
    price: 2399
  }
   
]


const Premium=()=>{
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
export default Premium
