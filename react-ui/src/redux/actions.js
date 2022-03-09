import { GET_ROCKETS } from "./actionTypes";

const ROCKET = "https://api.spacexdata.com/v4/rockets";

export const getRockets = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(ROCKET, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ROCKETS,
          payload: json,
        });
      } else {
        console.log("Unable to Fetch");
      }
    };
  } catch (error) {
    console.log(error);
  }
};
