const initialState = {
  totalPrice: 0,
  itemsCount: 0,
  items: {},
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload], // если динамическое значение, то нужно передавать в квадратных скобках
      };
      return {
        ...state,
        items: newItems,
        itemsCount: [].concat.apply([], Object.values(newItems)).length,
      };
    }

    default:
      return state;
  }
};

export default cart;
