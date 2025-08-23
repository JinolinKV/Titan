import React, { Component } from 'react'
import Cards from '../components/Cards'
import Marquee from '../components/Marquee'
import HeaderRole from '../components/HeaderRole'
import Navbar from '../components/Navbar'

const Products=[
  {
    productId:'s1',
    image:"./images/90188AP01_1.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999

  },
  {
    productId:'s2',
    image:"./images/s2.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
  },
   {
    productId:'s3',
    image:"./images/s3.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
   },
   {
    productId:'s4',
    image:"./images/s4.webp",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
   }
   
]


const SmartWatch =()=> {
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

export default SmartWatch
