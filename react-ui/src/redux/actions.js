import { GET_ROCKETS } from "./actionTypes";
import { GET_CAPSULES } from "./actionTypes";

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

export const getCapsules = () => (dispatch) => {
  fetch("https://api.spacexdata.com/v4/capsules")
    .then((data) => data.json())
    .then((response) => {
      dispatch(fetchCapsules(response));
    });
};

const fetchCapsules = (capsules) => {
  return {
    type: GET_CAPSULES,
    capsules,
  };
};
