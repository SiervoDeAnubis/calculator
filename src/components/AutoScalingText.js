import React, { Component } from "react";
import styles from "../styles/auto-scaling-text.module.css";

class AutoScalingText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 1
    };
  }

  componentDidMount() {
    const { scale } = this.state;

    const node = this.node;
    const parentNode = node.parentNode;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) return;

    if (actualScale < 1) {
      this.setState({ scale: actualScale });
    } else if (scale < 1) {
      this.setState({ scale: 1 });
    }
  }

  render() {
    const { scale } = this.state;
    return (
      <div
        className={styles.autoScalingText}
        style={{ transform: `scale(${scale}, ${scale})` }}
        ref={node => (this.node = node)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default AutoScalingText;
