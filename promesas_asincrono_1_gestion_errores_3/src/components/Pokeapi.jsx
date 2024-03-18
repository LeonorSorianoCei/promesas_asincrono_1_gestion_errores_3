import React, { useEffect, useState } from 'react';
import './poke.css'; 
function Pokeapi() {
  const [bulbasaurData, setBulbasaurData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    };

     //GESTION DE ERRORES EN REACT
    fetch('https://pokeapi.co/api/v2/pokemon/1', options)
      .then((res) => res.json())
      .then((data) => setBulbasaurData(data))
      .catch((err) => console.log('Error al obtener datos de la API:', err))
      .finally(() => controller.abort());

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2>PokeAPI</h2>
      {bulbasaurData && (
        <div className='bulbasur'>
          <h3>{bulbasaurData.name}</h3>
          <img src={bulbasaurData.sprites.front_default} alt={`Imagen de ${bulbasaurData.name}`} />
          <p>Altura: {bulbasaurData.height}</p>
          <p>Peso: {bulbasaurData.weight}</p>
          <p>Tipo(s): {bulbasaurData.types.map((type) => type.type.name).join(', ')}</p>
        </div>
      )}
    </>
  );
}

export default Pokeapi;
