import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Error from "../Error/Error";
import styledDet from "./Detail.module.css";
import arrowIMG from "../../content/Left-Arrow-PNG-File.png";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  function returnClick() {
    navigate("/home");
  }

  useEffect(() => {
    axios(
      `http://${window.location.hostname}:3001/rickandmorty/character/${id}`
    )
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch(() => {
        setError(true);
      });

    return setCharacter({});
  }, [id]);

  if (error) {
    return <Error />;
  }

  return (
    <div className={styledDet.container}>
      <div className={styledDet.InfCont}>
        <img
          className={styledDet.backArr}
          src={arrowIMG}
          alt=""
          onClick={returnClick}
        />
        <div className={styledDet.data}>
          <h1>{character.name}</h1>
          <h3>STATUS | {character.status}</h3>
          <h3>GENDER | {character.gender}</h3>
          <h3>SPECIE | {character.species}</h3>
          {character.origin ? <h3>ORIGIN | {character.origin.name}</h3> : null}
        </div>
        <img
          className={styledDet.mainImg}
          src={character.image}
          alt={character.name}
        />
      </div>
    </div>
  );
}
