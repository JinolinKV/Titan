// Women.jsx
import React from 'react';
import Cards from '../components/Cards';
import Marquee from '../components/Marquee';
import HeaderRole from '../components/HeaderRole';
import Navbar from '../components/Navbar';

const products = [
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
  }
];

const women = () => {
  return (
    <div>
      <Marquee />
      <HeaderRole />
      <Navbar/>
      <div className="d-flex flex-wrap justify-content-center my-4">
        {products.map((product) => (
          <Cards
            key={product.id}
            id={product.id}  
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default women;
