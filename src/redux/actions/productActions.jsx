import {ActionTypes} from "../constants/action-types"

export const setProducts=(products)=>{
    return {
      type: ActionTypes.SET_PRODDUCTS,
      payload: products,
    };
}

export const selectedProducs = (producs) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: producs,
  };
};

export const removeSelectedProducs = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
 
  };
};