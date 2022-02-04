// action creator - функция, которая возвращает объект action

const setTotalPrice = (price) => ({
  type: "SET_TOTAL_PRICE",
  payload: price,
});

const setTotalCount = (count) => ({
  type: "SET_TOTAL_COUNT",
  payload: count,
});
