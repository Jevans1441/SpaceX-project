import { SET_SINGLE_ROCKET } from "../actionTypes";

const initialState = [];

function singleRocketReducer(state = initialState, action) {
  if (action.type === SET_SINGLE_ROCKET) {
    return action.singleRocket;
  }
  return state;
}

export default singleRocketReducer;
