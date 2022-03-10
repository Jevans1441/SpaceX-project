import { GET_ROCKETS } from "./actionTypes";

export const getRockets = () => (dispatch) => {
  fetch("https://api.spacexdata.com/v4/rockets")
    .then((data) => data.json())
    .then((response) => {
      dispatch(fetchSuccess(response));
    });
};

const fetchSuccess = (rocket) => {
  return {
    type: GET_ROCKETS,
    rocket,
  };
};
