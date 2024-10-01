import React, { useEffect } from "react";
import styles from "./HomePage.module.css";
import tiktokVideo from "./tiktok-video.mp4";

export default function HomePage() {

  return (
    <main>
      <section id={styles.videoContainer}>
        <h1>We are the College Democrats at Central Michigan University</h1>
        <p>We dedicate ourselves to organizing students through issue education, advocacy, voter registration, and turnout as we strive to create a more just society for everyone.</p>
        <video muted src={tiktokVideo} autoPlay loop style={{
          position: "absolute",
          zIndex: 0
        }}/>
      </section>
    </main>
  );

}