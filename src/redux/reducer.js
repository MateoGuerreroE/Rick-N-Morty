import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      const filteredFavs = state.myFavorites.filter(
        (fav) => fav.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: filteredFavs,
      };
    default:
      return { ...state };
  }
}
