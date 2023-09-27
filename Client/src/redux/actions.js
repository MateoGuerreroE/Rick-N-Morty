import axios from "axios";
// ACTION TYPES

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function addFav(character) {
  const endpoint = `http://${window.location.hostname}:3001/rickandmorty/fav`;
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({ type: ADD_FAV, payload: data });
    } catch (error) {
      alert("Error reaching Favs data");
    }
  };
}

export function removeFav(id) {
  const endpoint =
    `http://${window.location.hostname}:3001/rickandmorty/fav/` + id;
  return async (dispatch) => {
    try {
      let { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      alert("Error reaching Favs data");
    }
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
