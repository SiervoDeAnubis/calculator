import "./styles/global.css";
import React from "react";
import { render } from "react-dom";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <React.StrictMode>
      <Calculator />
      <div style={{ marginTop: 30, textAlign: "center" }}>
        Calculator component{" "}
        <a href="https://codepen.io/mjijackson/pen/xOzyGX">created</a> by
        <br />
        <a href="https://twitter.com/mjackson">Michael Jackson</a> of{" "}
        <a href="https://reacttraining.com/">React Training</a>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("app"));
