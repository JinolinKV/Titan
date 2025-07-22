import React from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import "./home.css";
import HeaderRole from "../components/HeaderRole";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();


  const navigate = useNavigate();
  const CheckOut = () => {
    navigate("/PlaceOrder");
  };
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);



  return (
    <div>
      <HeaderRole />

      {cartItems.length === 0 ? (
        <div className="container text-center">
          <img src="./images/emptybag_desktop.webp" alt="Empty Bag" />
          <h5>Your cart is Empty</h5>
        </div>
      ) : (
        <div className="container mt-4">
          <h2>Your Cart</h2>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                  <div>
                    <strong>{item.title}</strong> <br />
                    <small>{item.description}</small>
                    <br />
                    <div className="d-flex align-items-center my-1">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div>Subtotal: ₹{item.price * item.quantity}</div>
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-end mt-3">
  <h5>Total Amount: ₹{totalAmount.toFixed(2)}</h5>
</div>


          <button className="btn btn-success mt-3" onClick={CheckOut}>
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
