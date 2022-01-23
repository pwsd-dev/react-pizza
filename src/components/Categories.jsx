import React from "react";

function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div>
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => {
            onSelectItem(null);
          }}
          className="active"
        >
          Все
        </li>
        {items.map((item, index) => {
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
}

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
