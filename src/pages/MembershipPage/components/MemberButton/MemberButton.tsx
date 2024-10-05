import React from "react";
import { Link } from "react-router-dom";
import styles from "./MemberButton.module.css";

export interface MemberButtonProperties {
  imageSource: string;
  name: string;
  title: string;
}

export default function MemberButton(props: MemberButtonProperties) {

  return (
    <li className={styles.item}>
      <Link to={`/membership/${props.name.replaceAll(" ", "-").toLowerCase()}`}>
        <section className={styles.imageContainer}>
          <img src={props.imageSource} />
        </section>
        <section>
          <b>{props.name}</b>
          <span>{props.title}</span>
        </section>
      </Link>
    </li>
  );

}