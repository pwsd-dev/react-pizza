import React from "react";

const Categories = React.memo(function Categories({
  itemsCategories,
  onClickItemCategories,
}) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItemCategories(index);
  };

  return (
    <div>
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => {
            onSelectItem(null);
          }}
        >
          Все
        </li>
        {itemsCategories.map((item, index) => {
          return (
            <li
              className={activeItem === index ? "active" : ""}
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
