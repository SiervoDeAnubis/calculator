import React, { Component } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import styles from "../styles/calculator.module.css";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false
    };
  }

  clearAll() {
    this.setState({
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false
    });
  }

  cleanDisplay() {
    this.setState({
      displayValue: "0"
    });
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className={styles.calculator}>
        <CalculatorDisplay value={displayValue} />
      </div>
    );
  }
}

export default Calculator;
