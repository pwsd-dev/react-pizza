import React from "react";
import { Categories, SortPopup, ItemPizza } from ".././components";

function Home({ itemsPizza }) {
  console.log(itemsPizza);
  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories
            onClickItem={(item) => console.log(item)}
            itemsCategories={[
              "Мясные",
              "Вегетарианская",
              "Гриль",
              "Острые",
              "Закрытые",
            ]}
          />
        </div>
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {itemsPizza.map((obj) => (
          <ItemPizza key={obj.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
