import React, { useState, useEffect } from 'react';
import rocks, { rocksDescriptions, rocksPrice } from '../assets/rocks';
import '../styles/Shop.css';
import ShoppingCart from './ShoppingCart';

const Shop = ({ setCartItems, setxItems, cartItems }) => {
  const [rocksImgs, setRocksImgs] = useState([]);

  const addToCart = (i) => {
    const currentItem = { img: rocks[i], desc: rocksDescriptions[i], price: rocksPrice[i], x: 1, total: rocksPrice[i] };
    setCartItems((prevState) => {
      return [...prevState, currentItem];
    });

    setxItems(() => {
      const total = cartItems.reduce((value, current) => {
        return parseInt(value) + parseInt(current.x);
      }, 1);

      return total;
    });
  };

  useEffect(() => {
    setRocksImgs(rocks);
  }, []);

  return (
    <div className="shop-container">
      {rocksImgs.map((rockImg, i) => {
        return (
          <div className="rock-card" key={i}>
            <div>
              <img className="rock" src={rockImg} alt="A rock" />
            </div>
            <div className="description">{rocksDescriptions[i]}</div>
            <div>
              <div className="price"> {rocksPrice[i]}$ </div>
              <button
                onClick={() => {
                  addToCart(i);
                }}
                className="add-item"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
