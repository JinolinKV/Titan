// Women.jsx
import React from 'react';
import Cards from '../components/Cards';
import Marquee from '../components/Marquee';
import HeaderRole from '../components/HeaderRole';
import Navbar from '../components/Navbar';

const Products = [
  {
    productId: 'w1',
    image: './images/2606WM08_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Multifunction Karishma",
    price: 3000
  },
  {
    productId: 'w2',
    image: './images/1805QM04_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Multifunction Karishma",
    price: 4500
  },
  {
    productId: 'w3',
    image: './images/68035KL01_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Men's Elegance",
    price: 1999
  },
  {
    productId: 'w4',
    image: './images/2656WM01_1.webp',
    title: 'Titan',
    description: "Women's Watch | Titan Minimal Quartz",
    price: 2399
  }
];

const women = () => {
  return (
    <div>
      <Marquee />
      <HeaderRole />
      <Navbar/>
      <div className="d-flex flex-wrap justify-content-center my-4">
        {Products.map((item) => (
  <Cards
    key={item.id || item.productId}
    productId={item.id || item.productId}
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

export default women;
