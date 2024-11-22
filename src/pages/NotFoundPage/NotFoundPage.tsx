import React from "react";
import styles from "./NotFoundPage.module.css"

export default function NotFoundPage() {

  document.title = "Page not found • College Democrats at Central Michigan University";

  return (
    <main id={styles.main}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Menorca_-_50131186937.jpg" />
      <h1>Nope, couldn't find that one</h1>
      <p>Should something be here? Get in touch with us.</p>
    </main>
  );

}