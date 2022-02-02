const initialState = {
  search: "",
};

const search = (state = initialState, action) => {
  if (action.type === "SET_SEARCH") {
    return {
      ...state,
      search: action.payload,
    };
  }

  return state;
};

export default search;
