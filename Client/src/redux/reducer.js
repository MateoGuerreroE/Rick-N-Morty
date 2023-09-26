import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case ADD_FAV:
    //   return {
    //     ...state,
    //     myFavorites: [...state.allCharacters, action.payload],
    //     allCharacters: [...state.allCharacters, action.payload], // Esto tambien se podria hacer solo cambiando allCharacters por myFavorites, para evitar el doble cambio en REMOVE_FAV
    //     // Asi es mas entendible, dado que Favorites sera siempre lo que este en AllFavorites cuando se use ADD.
    //     // Esto tambien se hace para que cuando se entre a Favorites de una renderice todos.

    //     //! Em caso de que se use con allCharacters meramente se deben cambiar varias cosas aca y en el map de cards, se debe tomar allcharacters y no myFavorites
    //   };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    // case REMOVE_FAV:
    //   const filteredFavs = state.myFavorites.filter(
    //     (fav) => fav.id !== Number(action.payload)
    //   );
    //   return {
    //     ...state,
    //     myFavorites: filteredFavs,
    //     allCharacters: filteredFavs,
    //   };
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
