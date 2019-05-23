import { combineReducers } from "redux";
import restuarantReducer from "./restaurantReducer";
import refineReducer from "./refineReducer";

export default combineReducers({
  restaurants: restuarantReducer,
  refines: refineReducer
});
