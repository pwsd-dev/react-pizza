// action creator - функция, которая возвращает объект action

const setSortBy = (name) => ({
  type: "SET_SORT_BY",
  payload: name,
});

const setCategory = (categoryIndex) => ({
  type: "SET_CATEGORY",
  payload: categoryIndex,
});
