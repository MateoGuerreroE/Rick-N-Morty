import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //     //! En caso de que se use con allCharacters meramente se deben cambiar varias cosas aca y en el map de cards, se debe tomar allcharacters y no myFavorites
    //   };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter((item) => {
          if (action.payload === "ALL") {
            return true;
          } else {
            return item.gender === action.payload;
          }
        }),
      };
    case ORDER:
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) => {
          if (action.payload === "A") {
            return a.id - b.id;
          } else {
            return b.id - a.id;
          }
        }),
      };

    default:
      return { ...state };
  }
}
