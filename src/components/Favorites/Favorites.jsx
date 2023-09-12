import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites(props) {
  function closeFav(id) {
    props.onCloseFav(id);
  }

  return (
    <div>
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
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
