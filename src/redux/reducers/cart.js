const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART":
      return {
        ...state, // возьми старые данные из state
        items: {
          [action.payload.id]: [
            ...state.items[action.payload.id],
            action.payload,
          ], // если динамическое значение, то нужно передавать в квадратных скобках
        },
      };

    default:
      return state;
  }
};

export default cart;
