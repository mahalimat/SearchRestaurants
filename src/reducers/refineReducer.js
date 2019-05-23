import { CHANGE_REFINE_FIELD } from "../actions/types";

const INITIAL_STATE = {
  refineField: ""
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHANGE_REFINE_FIELD:
      return { ...state, refineField: action.payload };
    default:
      return state;
  }
};
