import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MembershipList from "./components/MembershipList/MembershipList";
import MemberButton from "./components/MemberButton/MemberButton";
import styles from "./MembershipPage.module.css";
import members from "./members.json"
import advisors from "./advisors.json";

export default function MembershipPage() {

  const navigate = useNavigate();

  document.title = "Membership • College Democrats at Central Michigan University";

  const [memberButtonList, setMemberButtonList] = useState<ReactElement[]>([]);
  const [advisorButtonList, setAdvisorButtonList] = useState<ReactElement[]>([]);

  useEffect(() => {

    (async () => {

      for (const list of [members, advisors]) {

        const buttonList: ReactElement[] = [];

        for (const member of list) {

          let imageSourceModule;
          
          try {
            
            imageSourceModule = await (await import(`./images/${member.name.toLowerCase().replaceAll(" ", "-")}.jpg`));

          } catch (error) {

            imageSourceModule = await (await import(`./images/default.png`));

          }

          buttonList.push(
            <MemberButton 
              key={member.name} 
              name={member.name}
              title={member.title}
              term={"term" in member ? `${member.term}` : undefined}
              imageSource={imageSourceModule.default}
              objectPosition={member.objectPosition}
              imageWidth={member.width} />
          )
      
        }

        if (list === members) {

          setMemberButtonList(buttonList);

        } else {

          setAdvisorButtonList(buttonList);

        }

      }

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
      <MembershipList label="Advisors" description="These members advise the organization and assist in outreach, operations, and internal affairs.">
        {advisorButtonList}
      </MembershipList>
    </main>
  );

}