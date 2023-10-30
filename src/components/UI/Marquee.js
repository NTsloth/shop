import React from "react";
import styles from "../../styles/UI/Marquee.module.css";

export default function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        Create stunning images with as much or as little control as you like
        thanks to a choice of Basic and Creative modes.
      </div>
    </div>
  );
}
