import { ActionTypes } from "../constants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};
export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODDUCTS,
    payload: products,
  };
};

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
