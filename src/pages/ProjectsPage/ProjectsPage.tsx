import React from "react";
import styles from "./ProjectsPage.module.css";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {

  const navigate = useNavigate();

  document.title = "Projects • College Democrats at Central Michigan University";

  return (
    <main id={styles.main}>
      <section>
        <h1>Projects</h1>
      </section>
      <section>
        <h1>Helping eligible members of the Central Michigan University community get registered to vote</h1>
        <p>We're informing students about the upcoming election, and guiding them through the paperwork or website required to register to vote in Michigan. We prioritize using <a href="https://mvic.sos.state.mi.us/RegisterVoter/Index">the official Michigan website</a>, but we also personally deliver signed voter registration forms to the Mount Pleasant and Union Charter Township clerks.</p>
        <section className={styles.buttonList}>
          <button onClick={() => location.href = "mailto:leadership@cmichdemocrats.org?subject=Volunteering%20to%20register%20eligible%20student%20voters%20at%20Central%20Michigan%20University&body=Hi!%0D%0A%0D%0AI%20would%20like%20to%20volunteer%20to%20help%20register%20eligible%20student%20voters%20at%20Central%20Michigan%20University.%20When%20are%20you%20guys%20tabling%3F"}>Volunteer</button>
          <button className="secondary" onClick={() => navigate("/vote")}>Commit to voting</button>
        </section>
      </section>
      <section>
        <h1>Getting student voters committed to exercise their rights</h1>
        <p>Registering is half of the battle. We're getting student voters engaged in the process and discussing issues that matter most to them.</p>
        <section className={styles.buttonList}>
          <button onClick={() => location.href = "mailto:leadership@cmichdemocrats.org?subject=Volunteering%20to%20engage%20eligible%20student%20voters%20at%20Central%20Michigan%20University&body=Hi!%20%0D%0A%0D%0AI%20would%20like%20to%20volunteer%20to%20help%20engage%20eligible%20student%20voters%20at%20Central%20Michigan%20University.%20When%20are%20you%20guys%20tabling%3F"}>Volunteer</button>
          <button className="secondary" onClick={() => navigate("/vote")}>Commit to voting</button>
        </section>
      </section>
      <section>
        <h1>Getting connected with local, state, and federal officials</h1>
        <p>We're tired of seeing our representatives and government on a screen. That's why we're inviting any official or candidate — regardless of political party — to speak or introduce themselves to the students on campus.</p>
        <p>Are you a public official or running for office? Get in touch with us; we'd love for you to visit.</p>
        <section className={styles.buttonList}>
          <button onClick={() => location.href = "mailto:leadership@cmichdemocrats.org?subject=I%20want%20to%20connect%20with%20the%20students%20at%20Central%20Michigan%20University"}>Contact us</button>
        </section>
      </section>
    </main>
  );

}