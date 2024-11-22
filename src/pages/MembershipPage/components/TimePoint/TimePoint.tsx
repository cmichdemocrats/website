import React from "react";
import styles from "./TimePoint.module.css";

export default function TimePoint({children}: {children: string}) {

  return (
    <section className={styles.timePoint}>
      <span className={styles.timePointDot}></span>
      <span>{children}</span>
    </section>
  )

}