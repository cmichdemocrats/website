import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.png"

export default function Header() {

  return (
    <header id={styles.header}>
      <section id={styles.left}>
        <Link to="/">
          <img src={logoImage} />
          <span>College Democrats at Central Michigan University</span>
        </Link>
      </section>
      <section id={styles.right}>
        <ul>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/vote">Commit to voting</Link>
          </li>
          <li>
            <a href="#" target="_blank">Donate</a>
          </li>
        </ul>
      </section>
    </header>
  );

}