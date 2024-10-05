import React, { useEffect, useState } from "react";
import { Link, useLocation, Location } from "react-router-dom";
import closeIcon from "./close.svg";
import styles from "./MobileMenu.module.css";


export interface MobileMenuProperties {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu(props: MobileMenuProperties) {

  const location = useLocation();
  const [oldLocation, setOldLocation] = useState<Location>(location);

  useEffect(() => {

    if (location.pathname !== oldLocation.pathname) {

      props.onClose();

    }

    setOldLocation(location);

  }, [location]);

  return (
    <section id={styles.menu}>
      <section>
        <button id={styles.closeButton} onClick={() => props.onClose()}>
          <img src={closeIcon} />
        </button>
      </section>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
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
  );

}