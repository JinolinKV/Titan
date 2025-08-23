import React from 'react';
import Cards from '../components/Cards';
import Marquee from '../components/Marquee';
import HeaderRole from '../components/HeaderRole';
import Navbar from '../components/Navbar';

const Products = [
  {
    productId: 'i4',
    image: "./images/i4.webp",
    title: "Police",
    description: "Move Smart with smart watch",
    price: 13000
  },
  {
    productId: 'i6',
    image: "./images/i6.webp",
    title: "Police",
    description: "Move Smart with smart watch",
    price: 19990
  },
  {
    productId: 'i1',
    image: "./images/i1.webp",
    title: "Kenneth Cole",
    description: "Automatic Grey Dial Brown Colour Leather Strap Watch For Men",
    price: 5799
  },
  {
    productId: 'i3',
    image: "./images/i3.jpg",
    title: "Anne Klein",
    description: "Anne Klein Quartz Analog Purple Dial Plastic Strap Watch for Women",
    price: 8499
  }
];

const International = () => {
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

export default International;
