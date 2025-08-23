import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();
const BASE_URL = 'http://localhost:5000/api/cart';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getUserId = () => localStorage.getItem('userId');

  useEffect(() => {
    const userId = getUserId();
    if (!userId) return;

    axios.get(`${BASE_URL}/${userId}`)
      .then(res => setCartItems(res.data))
      .catch(err => console.error("Cart Fetch Error:", err.response?.data || err.message));
  }, []);

  const addToCart = async (item) => {
  const userId = getUserId();
  if (!userId) {
    console.error("User ID not found in localStorage");
    return;
  }

  // Support various field names
  const productId = item._id || item.id || item.productId;
  const { title, description, price, image } = item;

  // Validate required fields
  if (!productId || !title || !price) {
    console.error("Missing required fields in item:", item);
    return;
  }

  const newItem = {
    userId,
    productId,
    title,
    description,
    price,
    image,
  };

  console.log("Sending to Cart API:", newItem);

  try {
    const res = await axios.post(BASE_URL, newItem);
    setCartItems(prev => [...prev, res.data]);
  } catch (err) {
    console.error("Add to Cart Error:", err.response?.data || err.message);
  }
};

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setCartItems(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error("Remove from Cart Error:", err.response?.data || err.message);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
