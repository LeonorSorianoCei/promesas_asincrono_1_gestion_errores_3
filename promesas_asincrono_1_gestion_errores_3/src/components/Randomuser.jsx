import React, { useEffect, useState } from 'react';
import './randomuser.css';

function Randomuser() {
  const [usuarios, setUsuarios] = useState([]);

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
    fetch('https://randomuser.me/api/', options)
      .then((res) => res.json())
      .then((data) => setUsuarios(data.results))
      .catch((err) => console.log('Error al obtener usuarios:', err))
      .finally(() => controller.abort());

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2>Random User generator</h2>
      <ul>
        {usuarios.map(({ login, name, gender, location, picture }) => (
          <li key={login.uuid}>
            Este usuario se llama {name.first} {name.last} y su género es {gender === 'female' ? 'Mujer ♀️' : 'Hombre ♂️'}<br />
            Vive en {location.city}, en la calle {location.street.name} número {location.street.number}.  <br />
            <img src={picture.large} alt="imagen de usuario" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Randomuser;
