import React from "react";
import styles from "../styles/calculator-display.module.css";
import AutoScalingText from "./AutoScalingText";
import { getFormattedValue } from "../utils/utils";

const CalculatorDisplay = props => {
  const { value } = props;
  const formattedValue = getFormattedValue(value, navigator.language);
  return (
    <div {...props} className={styles.calculatorDisplay}>
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </div>
  );
};

export default CalculatorDisplay;
