import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const WishlistContext = createContext();
const BASE_URL = 'http://localhost:5000/api/wishlist';

// Get userId from localStorage
const getUserId = () => localStorage.getItem('userId');

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const userId = getUserId();
    if (!userId) return;

    axios
      .get(`${BASE_URL}/${userId}`)
      .then((res) => setWishlistItems(res.data))
      .catch((err) => console.error('Wishlist Fetch Error:', err));
  }, []);

  const addToWishlist = async (item) => {
    const userId = getUserId();
    if (!userId) {
      console.error('No user logged in');
      return;
    }

    // Normalize productId from possible keys
    const productId = item._id || item.id || item.productId;
    const { title, description, price, image } = item;

    // Check for required fields
    if (!productId || !title || !price) {
      console.error('Missing required fields in item:', item);
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

    try {
      const res = await axios.post(BASE_URL, newItem);
      setWishlistItems((prev) => [...prev, res.data]);
    } catch (err) {
      console.error('Add Wishlist Error:', err.response?.data || err.message);
    }
  };

  const removeFromWishlist = async (wishlistItemId) => {
    try {
      await axios.delete(`${BASE_URL}/${wishlistItemId}`);
      setWishlistItems((prev) => prev.filter((item) => item._id !== wishlistItemId));
    } catch (err) {
      console.error('Remove Wishlist Error:', err);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
