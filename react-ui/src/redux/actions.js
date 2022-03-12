import { GET_ROCKETS } from "./actionTypes";
import { GET_CREW } from "./actionTypes";
import { GET_DRAGONS } from "./actionTypes";
import { GET_HOME } from "./actionTypes";

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

export const getDragons = () => (dispatch) => {
  fetch("https://api.spacexdata.com/v4/dragons")
    .then((data) => data.json())
    .then((response) => {
      dispatch(fetchDragons(response));
    });
};

const fetchDragons = (dragons) => {
  return {
    type: GET_DRAGONS,
    dragons,
  };
};

export const getHome = () => (dispatch) => {
  fetch("https://api.spacexdata.com/v4/company")
    .then((data) => data.json())
    .then((response) => {
      dispatch(fetchHome(response));
    });
};

const fetchHome = (home) => {
  return {
    type: GET_HOME,
    home,
  };
};
