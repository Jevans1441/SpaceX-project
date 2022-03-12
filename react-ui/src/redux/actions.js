import { GET_ROCKETS } from "./actionTypes";
import { GET_CREW } from "./actionTypes";

export const getRockets = () => (dispatch) => {
  fetch("https://api.spacexdata.com/v4/rockets")
    .then((data) => data.json())
    .then((response) => {
      dispatch(fetchRockets(response));
    });
};

const fetchRockets = (rocket) => {
  return {
    type: GET_ROCKETS,
    rocket,
  };
};

export const getCrew = () => (dispatch) => {
  fetch("https://api.spacexdata.com/v4/crew")
    .then((data) => data.json())
    .then((response) => {
      dispatch(fetchCrew(response));
    });
};

const fetchCrew = (crew) => {
  return {
    type: GET_CREW,
    crew,
  };
};
