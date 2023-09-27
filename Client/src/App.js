import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import Favorites from "./components/Favorites/Favorites";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import { useEffect } from "react";
import { removeFav } from "./redux/actions";

function App(props) {
  // STATES

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate(); // Command for nav
  const [access, setAccess] = useState(false); // starts access as false //! SET AS TRUE FOR DEVELOPMENT PRPSES

  // HANDLERS OR MODIFYERS

  function onCloseFav(id) {
    props.removeFav(id);
  }

  function onClose(id) {
    setCharacters((chars) => chars.filter((char) => char.id !== id));
    //? This was changed after express just removed parseInt, not working with it.
    //? as char.id is now string
  }

  async function onSearch(id) {
    //! REACTState Bug:
    // State array takes some time (up to 0.5s) to add char, so If user presses several times
    // button before those 0.5s, char will add more than once as will validate state characters
    // and the char wont be added until that time elapsed, never changing already var.
    try {
      let character = await axios(
        `http://${window.location.hostname}:3001/rickandmorty/character/${id}`
      );
      character = character.data;
      let already = false;

      characters.forEach((item) => {
        if (item.id === character.id) already = true;
      });

      if (!already) {
        setCharacters((oldChars) => [...oldChars, character]);
        // Callback donde hara esto con los componentes que ya tenga
      } else {
        window.alert("¡Este personaje ya esta en la lista!");
      }
    } catch (error) {
      alert("No existe ese ID, " + error);
    }
  }

  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login/";
  //   axios(URL + `?email=${email}&password=${password}`)
  //     .then(({ data }) => {
  //       const { access } = data;
  //       setAccess(data);
  //       access && navigate("/home");
  //     })
  //     .catch((error) => console.log("El pepe"));
  // }
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = `http://${window.location.hostname}:3001/rickandmorty/login/`;
      const { access } = (
        await axios(URL + `?email=${email}&password=${password}`)
      ).data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  function logOut() {
    setAccess(false);
    navigate("/");
    setCharacters([]);
  }

  // ON LOAD

  useEffect(() => {
    // This makes that everytime access is changed (even since generated) will evaluate
    !access && navigate("/"); // false as true, making condition after && to evaluate and keeps user on path '/'
  }, [access]); // once access is true, sets as false and wont do a thing.

  // RENDER

  return (
    <div className="App">
      {useLocation().pathname === "/" ? null : <Nav onSearch={onSearch} />}
      {useLocation().pathname === "/" ? null : (
        <button className="button" onClick={logOut} />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/favorites"
          element={<Favorites onCloseFav={onCloseFav} onClose={onClose} />}
        />
        <Route path="/" element={<Form login={login} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(null, mapDispatchToProps)(App);
