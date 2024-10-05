import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.png"

export default function Header() {

  const [shouldShowBackground, setShouldShowBackground] = useState<boolean>(false);

  useEffect(() => {

    function checkScrollPosition() {

      setShouldShowBackground(window.scrollY >= 633);
      
    }

    document.addEventListener("scroll", checkScrollPosition);

    return () => {

      document.removeEventListener("scroll", checkScrollPosition);

    }

  }, []);

  return (
    <header id={styles.header} className={shouldShowBackground ? styles.background : undefined}>
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