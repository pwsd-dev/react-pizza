import React from "react";
import { Categories, SortPopup, ItemPizza } from ".././components";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories
            itemsCategories={[
              "Мясные",
              "Вегетарианская",
              "Гриль",
              "Острые",
              "Закрытые",
            ]}
          />
        </div>
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <ItemPizza key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
