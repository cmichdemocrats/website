import React from "react";
import styles from "./VotingInformationPage.module.css";

export default function VotingInformationPage() {

  document.title = "Commit to vote • College Democrats at Central Michigan University";

  return (
    <main id={styles.main}>
      <section>
        <h1>Commit to vote</h1>
      </section>
      <section>
        <h1>Check your registration</h1>
        <p>You can't vote without being registered. Most Michigan residents are automatically registered when they get their state ID or driver's license, but some new residents (including out-of-state student who moved into a dorm) may not be registered yet. The easiest way to check if you're registered is to check the official Michigan website.</p>
        <section className={styles.buttonList}>
          <button onClick={() => location.href = "https://mvic.sos.state.mi.us/Voter/Index"}>Check voter registration status on michigan.gov</button>
        </section>
      </section>
      <section>
        <h1>Register to vote</h1>
        <p>If you're eligible to vote in Michigan but you're not registered yet, you can easily do so at the official Michigan website.</p>
        <section className={styles.buttonList}>
          <button onClick={() => location.href = "https://mvic.sos.state.mi.us/RegisterVoter/Index"}>Register to vote on michigan.gov</button>
        </section>
      </section>
      <section>
        <h1>Register for an absentee ballot</h1>
        <p>November 5th not a good day for you? Make sure your voice still counts with an absentee ballot. You can get a ballot in the mail, and you'll be able to return it for free.</p>
        <section className={styles.buttonList}>
          <button onClick={() => location.href = "https://mvic.sos.state.mi.us/AVApplication/Index"}>Register for an absentee ballot on michigan.gov</button>
        </section>
      </section>
      <section>
        <h1>Commit to voting</h1>
        <p>Gonna vote? Good. Tell us what's important to you so our officials can get their priorities straight.</p>
        <section className={styles.buttonList}>
          <button onClick={() => location.href = "https://forms.office.com/r/JhTGrBygF2"}>I have a cmich.edu email</button>
          <button className="secondary" onClick={() => location.href = "https://forms.office.com/r/pEkvQYiwiq"}>I'm a guest</button>
        </section>
      </section>
    </main>
  );

}