import { combineReducers } from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import searchReducer from "./search";

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  searchReducer,
});

export default rootReducer;
