import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./scss/app.scss";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy,
    };
  });

  React.useEffect(() => {
    async function getData() {
      await axios
        .get("http://imac-admin.local:3002/db.json")
        .then(({ data }) => {
          dispatch(setPizzas(data.pizzas));
        });
    }

    getData();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={items} />} exact />
            <Route path="/cart" element={<Cart />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// const mapDispatchToProps = {
//   setPizzas,
// };

/*
Пример использования fetch вместо axios

React.useEffect(() => {
  fetch("http://imac-admin.local:3000/db.json")
    .then((resp) => resp.json())
    .then((json) => {
      setPizzas(json.pizzas);
    });
}, []);

*/

/*
class App extends React.Component {
  componentDidMount() {
    async function getData() {
      await axios
        .get("http://imac-admin.local:3002/db.json")
        .then(({ data }) => {
          this.props.setPizzas(data.pizzas);
        });
    }

    getData();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<Home items={this.props.items} />}
                exact
              />
              <Route path="/cart" element={<Cart />} exact />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // взять state и поместить в props
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
};

*/
