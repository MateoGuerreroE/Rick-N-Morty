import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import styledFav from "./Favorites.module.css";

function Favorites(props) {
  function closeFav(id) {
    props.onCloseFav(id);
  }

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  function handleOrder(event) {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  }

  function handleFilter(event) {
    dispatch(filterCards(event.target.value));
  }

  useEffect(() => () => dispatch(filterCards("ALL")), []);
  //! TESTING
  useEffect(() => console.log("favorites", props.myFavorites), []);

  return (
    <div className={styledFav.container}>
      <div className={styledFav.filter}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="ALL">All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={styledFav.cardCont}>
        {props.myFavorites.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            species={item.species}
            gender={item.gender}
            image={item.image}
            onClose={() => {
              closeFav(item.id);
              props.onClose(item.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
