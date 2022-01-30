// action creator - функция, которая возвращает объект action

export const setSortBy = (name) => ({
  type: "SET_SORT_BY",
  payload: name,
});

export const setCategory = (categoryIndex) => ({
  type: "SET_CATEGORY",
  payload: categoryIndex,
});
