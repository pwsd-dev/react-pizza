import { combineReducers } from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import searchReducer from "./search";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  search: searchReducer,
  cart: cartReducer,
});

export default rootReducer;
