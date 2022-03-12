import { GET_CAPSULES } from "../actionTypes";

const initialState = [];

function capsuleReducer(state = initialState, action) {
  if (action.type === GET_CAPSULES) {
    return action.capsules;
  }
  return state;
}

export default capsuleReducer;
