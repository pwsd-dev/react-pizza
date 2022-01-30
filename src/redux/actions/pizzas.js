import axios from "axios";

export const fetchPizzas = () => (dispatch) => {
  //ассинхронное получение action'a из редакса с помощью redux thunk (до этого получал в app)
  async function getData() {
    await axios.get("http://localhost:3001/pizzas").then(({ data }) => {
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
