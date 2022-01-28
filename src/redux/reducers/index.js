import { combineReducers } from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";

const rootReducer = combineReducers({
  filtersReducer: filtersReducer,
  pizzasReducer: pizzasReducer,
});

export default rootReducer;
