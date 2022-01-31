import React from "react";
import { Categories, SortPopup, ItemPizza } from ".././components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
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
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  const onSelectCategory = React.useCallback(
    (index) => {
      // будет один раз сохранять функцию и больше ее не выполнять (перерендеривать) , работает по принципу useEffect , но сохраняет ту функцию, которую указал
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories
            itemsCategories={categoryNames}
            onClickItemCategories={onSelectCategory}
          />
        </div>
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items && items.map((obj) => <ItemPizza key={obj.id} {...obj} />)
          : Array(8).fill(
              <ContentLoader viewBox="0 0 400 475" height={475} width={400}>
                <circle cx="30" cy="258" r="30" />
                <rect x="75" y="233" rx="4" ry="4" width="100" height="13" />
                <rect x="75" y="260" rx="4" ry="4" width="50" height="8" />
                <rect x="0" y="210" rx="5" ry="5" width="400" height="10" />
                <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
              </ContentLoader>
            )}
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
