import React, { useEffect } from "react";
import styles from "./Footer.module.css";

export default function Footer() {

  return (
    <footer id={styles.footer}>
      <section id={styles.footerContent}>
        <section>
          <section className={styles.listContainer}>
            <b>Learn about us</b>
            <ul>
              <li>Membership</li>
              <li>Operation documents</li>
              <li>Projects</li>
            </ul>
          </section>
          <section className={styles.listContainer}>
            <b>Get involved</b>
            <ul>
              <li>Get registered to vote</li>
              <li>Volunteer with us</li>
              <li>Attend events</li>
            </ul>
          </section>
          <section className={styles.listContainer}>
            <b>Get connected</b>
            <ul>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>Engage Central</li>
              <li>Email</li>
            </ul>
          </section>
        </section>
        <p>© 2024 College Democrats at Central Michigan University. All rights reserved. Paid for by the College Democrats at Central Michigan University. Not authorized by any candidate or candidate's committee.</p>
      </section>
    </footer>
  );

}