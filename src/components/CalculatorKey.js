import React from "react";
import PointTarget from "react-point";
import styles from "../styles/calculator.module.css";

const CalculatorKey = props => {
  const { className, onPress } = props;
  return (
    <PointTarget onPress={onPress}>
      <button className={`${styles.calculatorKey} ${className}`} {...props} />
    </PointTarget>
  );
};

export default CalculatorKey;
