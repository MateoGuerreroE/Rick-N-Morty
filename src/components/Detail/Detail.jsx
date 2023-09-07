import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <h3>STATUS | {character.status}</h3>
      <h3>GENDER | {character.species}</h3>
      <h3>SPECIE | {character.gender}</h3>
      {character.origin ? <h3>ORIGIN | {character.origin.name}</h3> : null}
      <img src={character.image} alt={character.name} />
    </div>
  );
}
