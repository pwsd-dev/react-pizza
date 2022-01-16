import React from "react";

function Categories({ items }) {
  console.log(items);
  //   items.map((item) => { // - тот случай, когда при выносе метода стили не подхватились
  //     return <li>{item}</li>;
  //   });
  return (
    <div>
      <ul>
        <li className="active">Все</li>
        <li>Мясные</li>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Categories;
