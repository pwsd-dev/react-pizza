import axios from "axios";

export const setLoaded = (val) => ({
  type: "SET_LOADED",
  payload: val,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  //ассинхронное получение action'a из редакса с помощью redux thunk (до этого получал в app)
  async function getData() {
    await axios
      .get(
        `http://localhost:3001/pizzas?${
          category !== null ? `category=${category}` : ""
        }&_sort=${sortBy.type}$_order=${sortBy.order}`
      )
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  }

  getData();
};

export const setPizzas = (items) => ({
  // setPizzas возвращает объект
  type: "SET_PIZZAS",
  payload: items,
});
