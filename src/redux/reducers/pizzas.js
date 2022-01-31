const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state, // возьми старые данные из state
        items: action.payload, // и замени на новый state
        isLoaded: true,
      };

    case "SET_LOADED":
      return {
        ...state, // возьми старые данные из state
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default pizzas;

/*

  if (action.type === "SET_PIZZAS") {
    // если прийдет action "SET_PIZZAS" ,
    return {
      ...state, // возьми старые данные из state
      items: action.payload, // и замени на новый state
      isLoaded: true,
    };
  }

  if (action.type === "SET_LOADED") {
    // если прийдет action "SET_PIZZAS" ,
    return {
      ...state, // возьми старые данные из state
      isLoaded: action.payload,
    };
  }

  

  return state; // если не прийдет, то верни старый state
}

*/
