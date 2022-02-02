const initialState = "";

const search = (state = initialState, action) => {
  if (action.type === "SET_SEARCH") {
    return action.payload;
  }

  return state;
};

export default search;
