import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import { Header } from "./components";
import { Home, Cart } from "./pages";

console.log();

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
