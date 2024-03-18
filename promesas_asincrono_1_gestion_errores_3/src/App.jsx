import React, { useState } from 'react';
import './App.css';
import Ejemplo from './components/Ejemplo';
import Fakestoreapi from './components/Fakestoreapi';
import Randomuser from './components/Randomuser';
import Dnd5eapi from './components/Dnd5eapi';
import Rawg from './components/Rawg';
import Pokeapi from './components/Pokeapi';


function App() {
  const [paginaActual, setPaginaActual] = useState("ejemplo");

  return (
    <>
      <header>
      <h2>Peticiones en ReactJS: Promesas</h2>
        <nav>
          <button
            className={paginaActual === "ejemplo" ? "active" : ""}
            onClick={() => setPaginaActual("ejemplo")}
          >
            JSON Placeholder
          </button>

          <button
            className={paginaActual === "fakestoreapi" ? "active" : ""}
            onClick={() => setPaginaActual("fakestoreapi")}
          >
            Fake Store API
          </button>

          <button
            className={paginaActual === "randomuser" ? "active" : ""}
            onClick={() => setPaginaActual("randomuser")}
          >
            RANDOM USER GENERATOR
          </button>


          <button
            className={paginaActual === "dnd5eapi" ? "active" : ""}
            onClick={() => setPaginaActual("dnd5eapi")}
          >
            D&D 5e API
          </button>

          <button
            className={paginaActual === "rawg" ? "active" : ""}
            onClick={() => setPaginaActual("rawg")}
          >
            rawg
          </button>

          <button
            className={paginaActual === "pokeapi" ? "active" : ""}
            onClick={() => setPaginaActual("pokeapi")}
          >
            pokeapi
          </button>

        </nav>
      </header>
      


      {paginaActual === "ejemplo" && <Ejemplo /> }
      {paginaActual === "fakestoreapi" && <Fakestoreapi />}
      {paginaActual === "randomuser" && <Randomuser />}
      {paginaActual === "dnd5eapi" && <Dnd5eapi />}
      {paginaActual === "rawg" && <Rawg />}
      {paginaActual === "pokeapi" && <Pokeapi/>}
    </>
  );
}

export default App;
