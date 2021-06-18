import { ActionTypes } from "../constants/action-types";
const initialState = {};
const selectedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export default selectedProductReducer;
