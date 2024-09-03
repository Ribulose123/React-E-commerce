import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const CheckOut = ({ cartItems, setCartItems }) => {
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.image.desktop} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="price">${item.price * item.quantity}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item)}>
                <FaMinus />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item)}>
                <FaPlus />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CheckOut;
