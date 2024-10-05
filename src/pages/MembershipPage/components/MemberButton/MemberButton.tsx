import React from "react";
import { Link } from "react-router-dom";
import styles from "./MemberButton.module.css";

export interface MemberButtonProperties {
  imageSource: string;
  name: string;
  title: string;
  term: string;
  objectPosition: number[];
  imageWidth?: number;
}

export default function MemberButton(props: MemberButtonProperties) {

  return (
    <li className={styles.item}>
      <Link to={`/membership/${props.name.replaceAll(" ", "-").toLowerCase()}`}>
        <section className={styles.imageContainer}>
          <img src={props.imageSource} style={{
            objectPosition: `${props.objectPosition[0]}px ${props.objectPosition[1]}px`,
            width: props.imageWidth ? `${props.imageWidth}%` : undefined
          }} />
        </section>
        <section>
          <b>{props.name}</b>
          <span>{props.title} ({props.term})</span>
        </section>
      </Link>
    </li>
  );

}