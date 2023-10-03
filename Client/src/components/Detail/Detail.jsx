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

  // useEffect(async () => {
  //   const {data} = await axios(
  //     `http://${window.location.hostname}:3001/rickandmorty/character/${id}`
  //   )
  //     .then(({ data }) => {
  //       if (data.name) {
  //         setCharacter(data);
  //       } else {
  //         window.alert("No hay personajes con ese ID");
  //       }
  //     })
  //     .catch(() => {
  //       setError(true);
  //     });

  //   return setCharacter({});
  // }, [id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://${window.location.hostname}:3001/rickandmorty/character/${id}`
        );
        setCharacter(data);
      } catch (error) {
        setError(true);
        window.alert(error);
      }
    }
    fetchData();
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
          <div className={styledDet.status}>
            <h3>{character.status}</h3>
            {character.status === "Alive" ? (
              <p style={{ backgroundColor: "green" }}></p>
            ) : (
              <p style={{ backgroundColor: "red" }}></p>
            )}
          </div>
          <div className={styledDet.infoCont}>
            <div className={styledDet.info}>
              <h3>Gender:</h3>
              <h3>{character.gender}</h3>
            </div>
            <div className={styledDet.info}>
              <h3>Specie:</h3>
              <h3>{character.species}</h3>
            </div>
            <div className={styledDet.info}>
              <h3>Origin:</h3>
              {character.origin ? <h3>{character.origin.name}</h3> : null}
            </div>
            <div className={styledDet.info}>
              <h3>Episodes seen:</h3>
              {character.episode ? <h3>{character.episode.length}</h3> : null}
            </div>
          </div>
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
