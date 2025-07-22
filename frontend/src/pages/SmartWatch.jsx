import React, { Component } from 'react'
import Cards from '../components/Cards'
import Marquee from '../components/Marquee'
import HeaderRole from '../components/HeaderRole'
import Navbar from '../components/Navbar'

const Products=[
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
   }
   
]


export class SmartWatch extends Component {
  render() {
    return (

      <div>
        
        <div>
          <Marquee/>
          <HeaderRole/>
          <Navbar/>
        </div>
        <div className="d-flex flex-wrap justify-content-center my-5">
          {Products.map((Product)=>(
            <Cards
              key={Product.id}
              id={Product.id}
              image={Product.image}
              title={Product.title}
              description={Product.description}
              price={Product.price}

            />
          )
        )}
        </div>
      </div>
    )
  }
}

export default SmartWatch
