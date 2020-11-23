import actionTypes from "./actionTypes";
import axios from "axios";

function requestDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA,
    data,
  };
}

function requestDataError(error) {
  return {
    type: actionTypes.LOAD_DATA_ERROR,
    error,
  };
}

export function requestData() {
  return async (dispatch) => {
    const endpoint = "data.json";

    try {
      const response = await axios(endpoint);
      dispatch(requestDataSuccess(response.data[0]));
    } catch (error) {
      dispatch(requestDataError(error));
    }
  };
}
