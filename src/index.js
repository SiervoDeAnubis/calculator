import "./styles/global.css";
import React from "react";
import { render } from "react-dom";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div style={{ marginTop: 30, textAlign: "center" }}>
      <Calculator />
    </div>
  );
};

render(<App />, document.getElementById("app"));
