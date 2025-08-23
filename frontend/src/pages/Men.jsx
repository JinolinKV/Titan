import React from 'react';
import Cards from '../components/Cards';
import Marquee from '../components/Marquee';
import HeaderRole from '../components/HeaderRole';
import Navbar from '../components/Navbar';

const products = [
  {
    productId: 'm1',
    image: './images/1713BM02_1.jpg',
    title: 'Titan',
    description: "Men's Watch | Titan Multifunction Karishma",
    price: 3000
  },
  {
    productId: 'm2',
    image: './images/1805QM04_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Multifunction Karishma",
    price: 4500
  },
  {
    productId: 'm3',
    image: './images/1806NM01_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Men's Elegance",
    price: 1999
  },
  {
    productId: 'm4',
    image: './images/1825SM11_1.webp',
    title: 'Titan',
    description: "Men's Watch | Titan Minimal Quartz",
    price: 2399
  }
];

const Men = () => {
  return (
    <div>
      <Marquee />
      <HeaderRole />
      <Navbar />
      <div className="d-flex flex-wrap justify-content-center my-4">
        {products.map((item) => (
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

export default Men;
