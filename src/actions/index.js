import axios from "axios";
import { FETCH_RESTAURANTS, CHANGE_REFINE_FIELD } from "./types";

export const fetchRestaurants = city => async dispatch => {
  const response = await axios.get(
    `http://opentable.herokuapp.com/api/restaurants?city=${city}`
  );

  console.log(response.data.restaurants);

  dispatch({ type: FETCH_RESTAURANTS, payload: response.data.restaurants });
};

export const setRefineField = text => ({
  type: CHANGE_REFINE_FIELD,
  payload: text
});
