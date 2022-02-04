import React from "react";
import { Categories, SortPopup, ItemPizza, Search } from ".././components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { setSearch } from "../redux/actions/search";
import { fetchPizzas } from "../redux/actions/pizzas";
import ContentLoader from "react-content-loader";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

// если переносить эти два массива в пропсы, то будет происходить лишний ререндер

const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  // const items = useSelector(({ pizzas }) =>
  //   pizzas.items.filter(pizzas.items.includes(searchItems))
  // );

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const searchItems = useSelector(({ search }) => search);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category, searchItems));
  }, [dispatch, sortBy, category, searchItems]);

  const onSelectCategory = React.useCallback(
    (index) => {
      // будет один раз сохранять функцию и больше ее не выполнять (перерендеривать) , работает по принципу useEffect , но сохраняет ту функцию, которую указал
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onSelectSort = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const onSelectSearch = React.useCallback(
    (name) => {
      dispatch(setSearch(name));
      console.log("setsearch", name);
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories
            activeCategory={category}
            itemsCategories={categoryNames}
            onClickItemCategories={onSelectCategory}
          />
        </div>
        <SortPopup
          items={sortItems}
          activeSort={sortBy.type}
          onSelectSort={onSelectSort}
        />
        <Search onSearch={onSelectSearch} activeSearch={searchItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items && items.map((obj) => <ItemPizza key={obj.id} {...obj} />)
          : Array(8)
              .fill()
              .map((_, index) => (
                <ContentLoader
                  key={index}
                  viewBox="0 0 400 475"
                  height={475}
                  width={400}
                >
                  <circle cx="30" cy="258" r="30" />
                  <rect x="75" y="233" rx="4" ry="4" width="100" height="13" />
                  <rect x="75" y="260" rx="4" ry="4" width="50" height="8" />
                  <rect x="0" y="210" rx="5" ry="5" width="400" height="10" />
                  <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
                </ContentLoader>
              ))}
      </div>
    </div>
  );
}

export default Home;

/*

  React.useEffect(() => {
    if (items.length === 0) {
      // решает проблему переотправки запроса на сервер при переходе на другую страницу
      // можно было бы написать !items.length, было бы одно и то же
      // но появляется другая проблема, при сортировке пиццы меняться не будут
      return dispatch(fetchPizzas());
    }
  }, [dispatch]);

  */
