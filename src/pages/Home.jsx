import React from "react";
import { Categories, SortPopup, ItemPizza } from ".././components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

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

  React.useEffect(() => {
    if (items.length === 0) {
      // решает проблему переотправки запроса на сервер при переходе на другую страницу
      return dispatch(fetchPizzas());
    }
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
        {items && items.map((obj) => <ItemPizza key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
