import React from "react";
import styles from "./VotingInformationPage.module.css";
import { useNavigate } from "react-router-dom";

export default function VotingInformationPage() {

  const navigate = useNavigate();

  document.title = "Commit to vote • College Democrats at Central Michigan University";

  return (
    <main id={styles.main}>
      <section>
        <h1>Commit to vote</h1>
      </section>
      <section>
        <h1>Check to see if you're registered</h1>
        <p>You can't vote without being registered. Most Michigan residents are automatically registered when they get their state ID or driver's license, but some new residents (including out-of-state student who moved into a dorm) may not be registered yet. The easiest way to check if you're registered is to check the official Michigan website.</p>
        <section>
          <button onClick={() => location.href = "https://mvic.sos.state.mi.us/Voter/Index"}>Check voter registration status on michigan.gov</button>
        </section>
      </section>
      <section>
        <h1>Register to vote</h1>
        <p>If you're eligible to vote in Michigan but you're not registered yet, you can easily do so at the official Michigan website.</p>
        <section>
          <button onClick={() => location.href = "https://mvic.sos.state.mi.us/RegisterVoter/Index"}>Register to vote on michigan.gov</button>
        </section>
      </section>
      <section>
        <h1>Commit to voting</h1>
        <p>Gonna vote this November? Good. Tell us what's important to you so our officials can get their priorities straight.</p>
        <section>
          <button onClick={() => location.href = "https://forms.office.com/r/JhTGrBygF2"}>I have a cmich.edu email</button>
          <button className="secondary" onClick={() => location.href = "#"}>I'm a guest</button>
        </section>
      </section>
    </main>
  );

}