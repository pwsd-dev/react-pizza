import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  itemsCategories,
  onClickItemCategories,
  activeCategory,
}) {
  const onSelectItem = (index) => {
    onClickItemCategories(index);
  };

  return (
    <div>
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => {
            onSelectItem(null);
          }}
        >
          Все
        </li>
        {itemsCategories.map((item, index) => {
          return (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickItemCategories: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

// class Categories extends React.Component {
//   state = {
//     activeItem: 0,
//   };
//   selectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };
//   render() {
//     const { items } = this.props;
//     return (
//       <div>
//         <ul>
//           {items.map((item, index) => {
//             return (
//               <li
//                 className={this.state.activeItem === index ? "active" : ""}
//                 onClick={() => this.selectItem(index)}
//                 key={`${item}_${index}`}
//               >
//                 {item}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
