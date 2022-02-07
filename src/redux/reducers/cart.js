const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.payload.id] //если ключа нет, то создает массив
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]; //

      const newItems = {
        ...state.items, // берем все состояние items и на следующей строке по id(key) передаем объект
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items); //берется новый массив [] перед конкат, далее apply помещает все массивы (содержащие в себе все значения объектов) в новый массив, а конкат объединяет все массивы в один
      const totalPrice = getTotalPrice(allPizzas);

      // console.log(totalPrice);
      return {
        ...state,
        items: newItems,
        itemsCount: allPizzas.length,
        totalPrice,
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: {},
        totalPrice: 0,
        itemsCount: 0,
      };

    case "REMOVE_CART_ITEM": {
      const newRemovedItems = {
        //генерация нового объекта всех пицц
        ...state.items,
      };
      const currentTotalPrice = newRemovedItems[action.payload].totalPrice; // перед удалением узнал сколько totalPrice
      const currentTotalCount = newRemovedItems[action.payload].items.length;
      delete newRemovedItems[action.payload];
      return {
        ...state,
        items: newRemovedItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        itemsCount: state.itemsCount - currentTotalCount,
      };
    }

    default:
      return state;
  }
};

export default cart;
