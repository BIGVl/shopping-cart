import './styles/App.css';
import Navbar from './components/Navbar';
import getSneakers from './assets/sneakers';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [sneakerImg, setSneakerImg] = useState();

  const getSneakerImgs = async () => {
    const sneakers = await getSneakers();
    const sneakersImg = sneakers.results[0].image.original;
    setSneakerImg(sneakersImg);
    console.log(sneakerImg);
  };

  useEffect(() => {
    getSneakerImgs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <img src={sneakerImg} alt="" />
    </div>
  );
};

export default App;
