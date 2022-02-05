const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
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

      const allPizzas = [].concat.apply([], Object.values(newItems)); //берется новый массив [] перед конкат, далее apply помещает все массивы (содержащие в себе все значения объектов) в новый массив, а конкат объединяет все массивы в один
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);
      // console.log(totalPrice);
      return {
        ...state,
        items: newItems,
        itemsCount: allPizzas.length,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;
