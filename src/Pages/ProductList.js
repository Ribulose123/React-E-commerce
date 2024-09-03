import React, { useState } from "react";
import Data from "../Data/data.json";
import CheckOut from "./CheckOut";
import { FaShoppingCart } from "react-icons/fa";

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Product added to cart:", product);
  
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      setCartItems((prevItems) => {
        const updatedCart = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log("Updated Cart with Existing Product:", updatedCart);
        return updatedCart;
      });
    } else {
      setCartItems((prevItems) => {
        const updatedCart = [...prevItems, { ...product, quantity: 1 }];
        console.log("Updated Cart with New Product:", updatedCart);
        return updatedCart;
      });
    }
  };
  


  return (
    <section className="product">
      <h2>Desserts</h2>
      <div className="product-con">

        <div className="product-item">
        {Data.map((product) => (
            <div key={product.id} className="product-details">
            <div className="image-side">
              <img src={product.image.desktop} alt={product.name} />
              <button onClick={() => addToCart(product)}>
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>
            <h4>{product.category}</h4>
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
          </div>
        ))}
        </div>

           <CheckOut cartItems={cartItems} setCartItems={setCartItems} />
      </div>

     
    </section>
  );
};

export default ProductList;
