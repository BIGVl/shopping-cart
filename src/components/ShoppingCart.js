import React, { useEffect, useState } from 'react';

const ShoppingCart = ({ cartItems, setCartItems, setxItems }) => {
  const [items, setItems] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  //Merging duplicates of items and by adding to the x property for each one and multiplying the price by x
  useEffect(() => {
    setItems((prev) => {
      const arranged = Object.values(
        prev.reduce((value, object) => {
          if (value[object.desc]) {
            value[object.desc].x = parseInt(value[object.desc].x) + 1;
            value[object.desc].total = value[object.desc].price * value[object.desc].x;
            // ['price'].forEach((key) => {
            // return (value[object.desc][key] = value[object.desc][key] + object[key]);
            // });
          } else {
            value[object.desc] = { ...object };
          }
          return value;
        }, {})
      );
      return arranged;
    });
  }, [cartItems]);

  //Total price of the order
  useEffect(() => {
    setTotalPrice(() => {
      const total = items.reduce((total, current) => {
        return total + parseInt(current.total);
      }, 0);
      return total;
    });
  }, [items]);

  //The numbers of item in the cart
  useEffect(() => {
    setxItems(() => {
      const total = items.reduce((value, current) => {
        return parseInt(value) + parseInt(current.x);
      }, 0);
      return total;
    });
  }, [items, cartItems]);

  //Listener for the number input and updates the App.js state so the whole page is aware of the change
  const changeXItems = (e) => {
    if (e.target.value <= 0) return;
    setItems((prev) => {
      prev.map((item) => {
        if (e.target.name === item.desc) {
          item.total = item.price * item.x;
          item.x = e.target.value;
        }
        return item;
      });
      return [...prev];
    });

    setCartItems(items);
  };

  //Updates the state of this component and also for the App component when the use wants to delete an item
  const handleDelete = (e) => {
    setItems((prev) => {
      const update = prev.filter((item) => {
        return item.desc !== e.target.dataset.desc;
      });
      return [...update];
    });
    setCartItems(items);
  };

  return (
    <div className="shopping-cart">
      {items.map((item, i) => {
        return (
          <div key={i}>
            <img src={item.img} alt="A rock for sale" />
            <svg
              onClick={handleDelete}
              className="delete-item-cart"
              data-desc={item.desc}
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <path d="M17.3 38.5H30.7Q31.3 38.5 31.8 38Q32.3 37.5 32.3 36.9V17.5H15.7V36.9Q15.7 37.5 16.2 38Q16.7 38.5 17.3 38.5ZM12.7 13.05V11.3H17.5L19.55 9.3H28.55L30.6 11.3H35.3V13.05ZM17.3 40.25Q15.95 40.25 14.95 39.275Q13.95 38.3 13.95 36.9V15.75H34.05V36.9Q34.05 38.3 33.075 39.275Q32.1 40.25 30.7 40.25ZM15.7 38.5H32.3Q32.3 38.5 31.8 38.5Q31.3 38.5 30.7 38.5H17.3Q16.7 38.5 16.2 38.5Q15.7 38.5 15.7 38.5Z" />
            </svg>
            <p className="desc">{item.desc}</p>
            <p className="price">Price: {item.price}$</p>
            <p className="total-p-item"> Total:{item.total}$ </p>
            <input type="number" name={item.desc} id="x-cart-items" onChange={changeXItems} value={item.x} />
          </div>
        );
      })}
      <div className="total-order">The total for the order is:{totalPrice}$ </div>
    </div>
  );
};

export default ShoppingCart;
