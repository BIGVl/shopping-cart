import './styles/App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Shop from './components/Shop';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Shop />
    </div>
  );
};

export default App;
