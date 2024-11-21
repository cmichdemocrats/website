import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./ConstitutionPage.module.css";
import constitutionText from "./constitution.md";
import Markdown from "react-markdown";
import sectionize from "remark-sectionize"

export default function ConstitutionPage() {

  return (
    <main id={styles.main}>
      <section>
        <h1>Constitution</h1>
      </section>
      <section id={styles.constitutionText}>
        <Markdown remarkPlugins={[sectionize]}>{constitutionText}</Markdown>
      </section>
      <section id={styles.actionList}>
        <button onClick={() => location.href = "https://github.com/cmichdemocrats/website/blame/production/src/pages/ConstitutionPage/constitution.md"}>View history</button>
        <button onClick={() => location.href = "https://github.com/cmichdemocrats/website/edit/production/src/pages/ConstitutionPage/constitution.md"}>Propose changes</button>
      </section>
    </main>
  );

}