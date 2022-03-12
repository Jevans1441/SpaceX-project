import { GET_DRAGONS } from "../actionTypes";

const initialState = [];

function dragonReducer(state = initialState, action) {
  if (action.type === GET_DRAGONS) {
    return action.dragons;
  }
  return state;
}

export default dragonReducer;
