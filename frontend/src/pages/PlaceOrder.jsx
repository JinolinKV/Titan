import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Logo from "../components/Logo";
import HeaderRole from "../components/HeaderRole";

const PlaceOrder = () => {
  const { cartItems, setCart } = useCart(); // Access cart and clearCart method
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add items before placing an order.");
      return;
    }

    
    console.log("Order Placed:", formData);

    
    setCart([]);

    alert("Order placed successfully!");
  };

  return (
    <div>
      <Logo/>
    <div className="container mt-4">
      <h3 className="text-center">Enter Delivery Address</h3>

      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          <div className="border rounded p-4 shadow-sm bg-light">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" name="name" required onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" name="phone" required onChange={handleChange} />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea className="form-control" name="address" required onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control" name="city" required onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Pincode</label>
                <input type="text" className="form-control" name="pincode" required onChange={handleChange} />
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlaceOrder;
