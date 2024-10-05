import React, { useState } from "react";
import styles from "./HomePage.module.css";
import tiktokVideo from "./tiktok-video.mp4";
import rotationRally from "./rotation-rally.mp4";

export default function HomePage() {

  const videos = [tiktokVideo, rotationRally];
  const [videoIndex, setVideoIndex] = useState(0);

  document.title = "College Democrats at Central Michigan University";

  return (
    <main>
      <section id={styles.videoContainer}>
        <h1>We are the College Democrats at Central Michigan University</h1>
        <p>We dedicate ourselves to organizing students through issue education, advocacy, voter registration, and turnout as we strive to create a more just society for everyone.</p>
        <video muted src={videos[videoIndex]} onEnded={() => setVideoIndex(videos[videoIndex + 1] ? videoIndex + 1 : 0)} autoPlay style={{
          position: "absolute",
          zIndex: 0
        }}/>
      </section>
    </main>
  );

}