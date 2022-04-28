import './styles/App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Shop from './components/Shop';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [xItems, setxItems] = useState(0);

  return (
    <Router>
      <Navbar xItems={xItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} setxItems={setxItems} />} />
        <Route
          path="/Shopping-cart"
          element={<ShoppingCart setCartItems={setCartItems} cartItems={cartItems} setxItems={setxItems} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
