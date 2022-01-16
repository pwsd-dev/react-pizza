import React from "react";

class Categories extends React.Component {
  render() {
    const { items, onClickItem } = this.props;
    return (
      <div>
        <ul>
          <li className="active">Все</li>
          {items.map((item, index) => {
            return (
              <li onClick={() => onClickItem(item)} key={`${item}_${index}`}>
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
