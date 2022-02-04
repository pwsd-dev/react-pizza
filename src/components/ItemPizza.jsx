import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "./Button";

function ItemPizza({ id, name, imageUrl, price, types, sizes, onAddToCart }) {
  const [activeType, setActiveType] = React.useState(types[0]); //в массиве types в любом случае есть первый элемент, но первый элемент является индексом, где-то он 0 или 1, поэтому по умолчанию я передаю первое значение индекса, без этого будет небольшой баг, который будет применять disabled, но при этом сама плашка традиционное или тонкое будет с бэкграундом
  const [activeTypeSize, setActiveTypeSize] = React.useState(0);
  const typeNames = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];

  const handleAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      imageUrl,
      type: typeNames[activeType],
      size: availableSizes[activeTypeSize],
    };
    onAddToCart(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typeNames.map((item, index) => (
            <li
              key={`${item}_${index}`}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index), // если массив types (который в json) не содержит какой либо из индексов, то применяется класс disabled
              })}
              onClick={() => setActiveType(index)}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((item, index) => (
            <li
              key={`${item}_${index}`}
              className={classNames({
                active: activeTypeSize === index,
                disabled: !sizes.includes(item), // если массив sizes (который в json) не содержит в себе своих же значений, то применяется класс disabled
              })}
              onClick={() => setActiveTypeSize(index)}
            >
              {item}см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom add-to">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button
          onClick={handleAddPizza}
          className="button button--outline button--add"
          outline={true}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </Button>
      </div>
    </div>
  );
}

console.log(PropTypes);

ItemPizza.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

ItemPizza.defaultProps = {
  // если в родительский компонент не передан пропс, то по умолчанию будут переданы значения ниже
  name: "---",
  price: 0,
  types: [],
  sizes: [],
};

export default ItemPizza;
