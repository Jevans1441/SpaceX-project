import { GET_ROCKETS } from "../actionTypes";

const initialState = [];

function rocketReducer(state = initialState, action) {
  if (action.type === GET_ROCKETS) {
    return action.rocket;
  }
  return state;
}

export default rocketReducer;
