import React from "react";
import styles from "../../styles/UI/Marquee.module.css";
class Marquee extends React.Component {
  render() {
    return (
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          Create stunning images with as much or as little control as you like
          thanks to a choice of Basic and Creative modes.
        </div>
        <div className={styles.marqueeContent}>
          Create stunning images with as much or as little control as you like
          thanks to a choice of Basic and Creative modes.
        </div>
        <div className={styles.marqueeContent}>
          Create stunning images with as much or as little control as you like
          thanks to a choice of Basic and Creative modes.
        </div>
      </div>
    );
  }
}

export default Marquee;
