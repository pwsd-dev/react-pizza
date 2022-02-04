const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOTAL_PRICE":
      return {
        ...state, // возьми старые данные из state
        totalPrice: action.payload, // и замени на новый state
      };

    case "SET_TOTAL_COUNT":
      return {
        ...state, // возьми старые данные из state
        itemsCount: action.payload,
      };

    default:
      return state;
  }
};

export default cart;
