import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";

function App() {
  const [characters, setCharacters] = useState([]);

  function onClose(id) {
    setCharacters((chars) => chars.filter((char) => char.id !== parseInt(id)));
  }

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          let already = false;
          characters.forEach((item) => {
            if (item.id === data.id) already = true;
          });
          if (!already) {
            setCharacters((oldChars) => [...oldChars, data]); // Callback donde hara esto con los componentes que ya tenga
            // ^ El valor que ya tenia
          }
        } else {
          window.alert("¡Ingrese un ID!");
        }
      })
      .catch((error) => alert("No existe ese ID, " + error));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
