import React, { useState, useEffect } from 'react';
import rocks from '../assets/rocks';
import '../styles/Shop.css';

const Shop = () => {
  const [sneakersImgs, setSneakerImgs] = useState([]);

  useEffect(() => {
    setSneakerImgs(rocks);
  }, []);

  return (
    <div className="shop-container">
      {sneakersImgs.map((sneakerImg) => {
        if (sneakerImg !== '') {
          return <img className="rock" src={sneakerImg} alt="" />;
        }
      })}
    </div>
  );
};

export default Shop;
