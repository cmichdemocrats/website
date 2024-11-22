import React from "react";
import styles from "./TimeRuler.module.css";

export default function TimeRuler({children}: {children: ReactNode}) {

  return (
    <section className={styles.timeRuler}>
      {children}
    </section>
  )

}