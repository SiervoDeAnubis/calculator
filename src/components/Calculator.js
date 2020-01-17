import React, { Component } from "react";
import CalculatorKey from "./CalculatorKey";
import styles from "../styles/calculator.module.css";

class Calculator extends Component {
  state = {
    value: null,
    displayValue: "0",
    operator: null,
    waitingForOperand: false
  };

  clearAll = () => {
    this.setState({
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false
    });
  };

  cleanDisplay = () => {
    this.setState({
      displayValue: "0"
    });
  };

  render() {
    return <div className={styles.calculator}>Hello World!!!!</div>;
  }
}

export default Calculator;
