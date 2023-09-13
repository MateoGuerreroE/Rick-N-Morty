import styledCard from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import React from "react";

function Card(props) {
  function sendId() {
    props.onClose(props.id);
  }

  const [isFav, setFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setFav(false);
      props.removeFav(props.id);
    } else {
      setFav(true);
      props.addFav(props);
    }
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styledCard.divCard}>
      <div className={styledCard.btns}>
        <button className={styledCard.exitButton} onClick={sendId}>
          X
        </button>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <div className={styledCard.data}>
        <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <div className={styledCard.information}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (element) => dispatch(addFav(element)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
