import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productsReducer";
const reducers = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer
});

export default reducers;