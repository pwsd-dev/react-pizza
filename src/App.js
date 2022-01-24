import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import { Header } from "./components";
import Home from "./pages/Home.jsx";

console.log();

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
