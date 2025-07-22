import React, { Component } from 'react'
import Cards from '../components/Cards'
import Marquee from '../components/Marquee'
import HeaderRole from '../components/HeaderRole'
import Navbar from '../components/Navbar'

const Products=[
  {
    id:'i1',
    image:"./images/i1.webp",
    title:"Police",
    description:"Move Smart with smart watch",
    price:1999

  },
  {
     id:'i2',
    image:"./images/i3.jpg",
    title:"Titan",
    description:"Move Smart with smart watch",
    price:1999
  },
   {
     id:'i4',
    image:"./images/i4.webp",
    title:"Kenneth Cole",
    description:" Automatic Grey Dial Brown Colour Leather Strap Watch For Men",
    price:1999
   },
   {
    id:'i6',
    image:"./images/i6.webp",
    title:"Anne Klein",
    description:"Anne Klein Quartz Analog Purple Dial Plastic Strap Watch for Women",
    price:1999
   }
   
]


export class International extends Component {
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

export default International
