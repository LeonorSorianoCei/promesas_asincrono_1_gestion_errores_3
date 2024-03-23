import React, { useEffect, useState } from 'react';
import './rawg.css';

const API_KEY =' '; 

function Rawg() {
  const [games, setGames] = useState([]);
  const { VITE_RAWG } =import.meta.env

  useEffect(() => {
    const controller = new AbortController();
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //'Key': API_KEY,
      },
      signal: controller.signal,
    };
 //GESTION DE ERRORES EN REACT
 //fetch('https://api.rawg.io/api/games?key='+ API_KEY, options)
 fetch(VITE_RAWG + API_KEY, options)
    .then((res) => res.json())
      .then((data) => setGames(data.results))
      .catch((err) => console.log('Error al obtener datos de la API:', err))
      .finally(() => controller.abort());

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2>RAWG</h2>
      <ul>
        {games.map((game) => (
          <li className='li-item' key={game.id}>
            <strong>Nombre:</strong> {game.name}<br />
            <strong>Descripción:</strong> {game.description_raw}<br />
            <img src={game.background_image} alt={`Imagen de ${game.name}`} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Rawg;
