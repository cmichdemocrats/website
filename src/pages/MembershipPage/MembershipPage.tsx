import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MembershipList from "./components/MembershipList/MembershipList";
import MemberButton from "./components/MemberButton/MemberButton";
import styles from "./MembershipPage.module.css";
import members from "./members.json"

export default function MembershipPage() {

  const navigate = useNavigate();

  document.title = "Membership • College Democrats at Central Michigan University";

  const [memberButtonList, setMemberButtonList] = useState<ReactElement[]>([]);

  useEffect(() => {

    (async () => {

      const memberButtonList: ReactElement[] = [];

      for (const member of members) {

        const imageSourceModule = await (await import(`./images/${member.name.toLowerCase().replaceAll(" ", "-")}.jpg`));

        memberButtonList.push(
          <MemberButton 
            key={member.name} 
            name={member.name}
            title={member.title}
            term={member.term}
            imageSource={imageSourceModule.default} />
        )
    
      }

      setMemberButtonList(memberButtonList);

    })();

  }, []);
  
  return (
    <main id={styles.main}>
      <section>
        <h1>Membership</h1>
      </section>
      <MembershipList label="Executive Board members" description="These members manage the operations and represent the members of the organization.">
        {memberButtonList}
      </MembershipList>
    </main>
  );

}