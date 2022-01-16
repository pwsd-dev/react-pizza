import React from "react";

class Categories extends React.Component {
  state = {
    activeItem: 3,
  };
  selectItem = (index) => {
    this.setState({
      activeItem: index,
    });
  };
  render() {
    const { items } = this.props;
    return (
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <li
                className={this.state.activeItem === index ? "active" : ""}
                onClick={() => this.selectItem(index)}
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
}

// function Categories({ items, onClickItem }) {
//   return (
//     <div>
//       <ul>
//         <li className="active">Все</li>
//         {items.map((item, index) => {
//           return (
//             <li onClick={() => onClickItem(item)} key={`${item}_${index}`}>
//               {item}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

export default Categories;
