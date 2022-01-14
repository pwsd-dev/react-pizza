import React from "react";

class Button extends React.Component {
  componentDidMount() {
    console.log("Кнопка смонтировалась");
  }

  componentDidUpdate() {
    console.log("Кнопка перемонтировалась");
  }

  render() {
    console.log(this.props.outline);
    return (
      <button
        className={
          this.props.outline ? "button--outline" : "button button--cart"
        }
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
