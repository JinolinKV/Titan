import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart} from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = ({ id, image, title, description, price }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [liked, setLiked] = useState(false);
  const navigate=useNavigate();
  const CheckOut = () => {
    navigate("/PlaceOrder"); 
  };


  const handleAddToCart = () => {
    addToCart({ id, image, title, description, price });
  };

  const handleLikeToggle = () => {
    setLiked(!liked);
    if (!liked) {
      addToWishlist({ id, image, title, description, price });
    }
  };

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {title}
          <FontAwesomeIcon
            icon={liked ? solidHeart : regularHeart}
            onClick={handleLikeToggle}
            style={{ color: liked ? "red" : "gray", cursor: "pointer" }}
          />
        </h5>
        <p className="card-text">{description}</p>
        <h6 className="card-text">₹{price}</h6>
        <button className="btn btn-primary me-2" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="btn btn-success me-2" onClick={CheckOut}>
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default Cards;
