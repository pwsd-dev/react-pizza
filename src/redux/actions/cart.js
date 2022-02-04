// action creator - функция, которая возвращает объект action

export const AddPizzaCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});
