import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({ onClick, className, text, outline, children }) => {
  // console.log(props);

  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {text}
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// function Button(props) {
//     return (
//       <button
//         className={classNames("button", {
//           "button--outline": props.outline,
//         })}
//       >
//         {props.text}
//       </button>
//     );
//   }

// class Button extends React.Component {
//   componentDidMount() {
//     console.log("Кнопка смонтировалась");
//   }

//   componentDidUpdate() {
//     console.log("Кнопка перемонтировалась");
//   }

//   render() {
//     console.log(this.props.outline);
//     return (
//       <button
//         className={classNames("button", {
//           "button--outline": this.props.outline,
//         })}
//       >
//         {this.props.text}
//       </button>
//     );
//   }
// }

export default Button;
