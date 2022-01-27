import { createStore } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

export default store;
