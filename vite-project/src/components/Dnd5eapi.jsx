import React, { useEffect, useState } from 'react';
import './dd5.css';
function Dnd5eapi() {
  const [classesInfo, setClassesInfo] = useState([]);
  const { VITE_DND } =import.meta.env


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
    // Obtener información específica de las clases desde la API de D&D 5th Edition
    //fetch('https://www.dnd5eapi.co/api/classes', options)
    fetch( VITE_DND , options)
      .then((res) => res.json())
      .then(async (data) => {
        const classData = await Promise.all(data.results.map(async (dndClass) => {
          const response = await fetch(`https://www.dnd5eapi.co${dndClass.url}`, options);
          const classInfo = await response.json();
          return classInfo;
        }));
        setClassesInfo(classData);
      })
      .catch((err) => console.log('Error al obtener datos de la API:', err))
      .finally(() => controller.abort());

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2>D&D 5e API</h2>
      <ul>
        {classesInfo.map((classInfo) => (
          <li className='listaa-item' key={classInfo.index}>
          Nombre: {classInfo.name}<br /><br />
          Habilidades: {classInfo.proficiencies.map((proficiency) => proficiency.name).join(', ')}
          <br />
          <br />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dnd5eapi;
