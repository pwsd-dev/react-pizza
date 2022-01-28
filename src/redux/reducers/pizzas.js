const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  if (action.type === "SET_PIZZAS") {
    // если прийдет action "SET_PIZZAS" ,
    return {
      ...state, // возьми старые данные из state
      items: action.payload, // и замени на новый state
    };
  }

  return state; // если не прийдет, то верни старый state
};

export default pizzas;
