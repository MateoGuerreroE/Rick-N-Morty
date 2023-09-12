// ACTION TYPES

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

// ACTIONS

export function addFav(element) {
  return {
    type: ADD_FAV,
    payload: element,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}
