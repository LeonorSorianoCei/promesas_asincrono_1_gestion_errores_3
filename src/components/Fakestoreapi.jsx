import React, { useEffect, useState } from 'react';
import './fakestoreapi.css';

function Fakestoreapi() {
  const [products, setProducts] = useState([]);
  const { VITE_FAKESTOREAPI } =import.meta.env

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
    // Obtener productos
    //fetch('https://fakestoreapi.com/products', options)
    fetch( VITE_FAKESTOREAPI , options)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log('Error al obtener productos:', err))
      .finally(() => controller.abort());

    return () => {
      // Abortar la solicitud al desmontar el componente
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2>Fake Store API</h2>
      <h3>Productos</h3>
      <ul className='lista'>
        {products.map((product) => (
          <li className='lista-item' key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Fakestoreapi;
