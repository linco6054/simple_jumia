import productReducer from "./productReducer";
import selectedProductReducer from "./selectedProcuctReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default rootReducer;
