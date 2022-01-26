import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./scss/app.scss";
import { Header } from "./components";
import { Home, Cart } from "./pages";

console.log();

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const pizzasResponse = await axios
        .get("http://imac-admin.local:3000/db.json")
        .then(({ data }) => {
          setPizzas(data.pizzas);
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
            <Route path="/" element={<Home itemsPizza={pizzas} />} exact />
            <Route path="/cart" element={<Cart />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
