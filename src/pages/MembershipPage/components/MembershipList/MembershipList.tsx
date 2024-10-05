import React from "react";
import styles from "./MembershipList.module.css";

export interface MembershipListProperties {
  label: string;
  description: string;
  children: ReactNode;
}

export default function MembershipList(props: MembershipListProperties) {

  return (
    <section>
      <h1>{props.label}</h1>
      <p>{props.description}</p>
      <ul className={styles.list}>
        {props.children}
      </ul>
    </section>
  );

}