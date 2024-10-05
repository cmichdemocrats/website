import React from "react";
import { useNavigate } from "react-router-dom";
import MembershipList from "./components/MembershipList/MembershipList";
import MemberButton from "./components/MemberButton/MemberButton";
import styles from "./MembershipPage.module.css";

export default function MembershipPage() {

  const navigate = useNavigate();

  document.title = "Membership • College Democrats at Central Michigan University";

  return (
    <main id={styles.main}>
      <section>
        <h1>Membership</h1>
      </section>
      <MembershipList label="Executive Board members" description="These members manage the operations and represent the members of the organization.">
      </MembershipList>
    </main>
  );

}