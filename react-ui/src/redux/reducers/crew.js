import { GET_CREW } from "../actionTypes";

const initialState = [];

function crewReducer(state = initialState, action) {
  if (action.type === GET_CREW) {
    return action.crew;
  }
  return state;
}

export default crewReducer;
