import { useEffect, useState } from 'react'
import './ejemplo.css';

function Ejemplo() {
  const [usuarios, setUsuarios] = useState([])
  const { VITE_USERS } =import.meta.env

  useEffect (()=>{
    let controller= new AbortController()
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      signal : controller.signal
    }

     //GESTION DE ERRORES EN REACT
    // fetch('https://jsonplaceholder.typicode.com/users', options)
     fetch( VITE_USERS , options)
    .then(res => res.json())
    .then(data => setUsuarios(data))
    .catch(err => console.log(err))
    .finally(err => controller.abort())
  } , [])

  return (
    <>
      
      <h3>JSON Placeholder</h3>
      <ul className='list'>
        {usuarios.map((usuario, index)=>
          <li className='list-item' key={usuario.id}>{usuario.name}</li>
        )}
      </ul>
    </>
  )
}

export default Ejemplo
