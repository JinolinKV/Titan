import React from "react";
import { useWishlist } from "../context/WishlistContext"; // ✅ correct
import { useCart } from "../context/CartContext";         // ✅ correct

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <div className="container mt-4">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="list-group">
          {wishlistItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "15px" }}
                />
                <strong>{item.title}</strong>
                <p className="mb-1">{item.description}</p>
                ₹{item.price}
              </div>
              <div>
                <button className="btn btn-primary me-2" onClick={() => handleMoveToCart(item)}>
                  Move to Cart
                </button>
                <button className="btn btn-danger" onClick={() => removeFromWishlist(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
