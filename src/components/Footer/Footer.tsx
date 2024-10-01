import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer id={styles.footer}>
      <section id={styles.footerContent}>
        <section>
          <section className={styles.listContainer}>
            <b>Learn about us</b>
            <ul>
              <li>
                <Link to="/membership">Membership</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </section>
          <section className={styles.listContainer}>
            <b>Get involved</b>
            <ul>
              <li>
                <Link to="/voting">Commit to voting</Link>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>
              <li>
                <Link to="/volunteer">Volunteer</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <a href="https://github.com/cmichdemocrats/website">Improve our website</a>
              </li>
            </ul>
          </section>
          <section className={styles.listContainer}>
            <b>Get connected</b>
            <ul>
              <li>
                <a href="https://instagram.com/cmichdemocrats">Instagram</a>
              </li>
              <li>
                <a href="https://tiktok.com/@cmichdemocrats">TikTok</a>
              </li>
              <li>
                <a href="https://engage.apps.cmich.edu/organization/college-democrats">Engage Central</a>
              </li>
              <li>
                <a href="mailto:leadership@cmichdemocrats.org">Email</a>
              </li>
            </ul>
          </section>
        </section>
        <p>© 2024 College Democrats at Central Michigan University. All rights reserved. Paid for by the College Democrats at Central Michigan University. Not authorized by any candidate or candidate's committee.</p>
      </section>
    </footer>
  );

}