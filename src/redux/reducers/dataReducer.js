import actionTypes from "../actions/actionTypes";

export default function dataReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_DATA:
      const loadData = { ...state, data: action.data };
      return loadData;

    case actionTypes.LOAD_DATA_ERROR:
      const loadError = { ...state, error: action.error };
      return loadError;

    default:
      return state;
  }
}
