async function getSneakers() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
      'X-RapidAPI-Key': '46239e7677msh4364337472a81a3p1bee63jsn9e02ca296506'
    }
  };
  try {
    const response = await fetch('https://the-sneaker-database.p.rapidapi.com/sneakers?limit=35', options);
    const yetSneakers = await response.json();
    return yetSneakers;
  } catch (err) {
    console.log(err);
  }
}

export default getSneakers;
