import React, { useState, useEffect } from 'react';

const Shop = () => {
  const [sneakersImgs, setSneakerImgs] = useState([]);

  return (
    <div className="shop-container">
      {sneakersImgs.map((sneakerImg) => {
        if (sneakerImg !== '') {
          return <img src={sneakerImg} alt="" />;
        }
      })}
    </div>
  );
};

export default Shop;
