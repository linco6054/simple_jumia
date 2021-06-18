import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODDUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default productReducer;


