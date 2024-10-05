import React, { useEffect, useState } from "react";
import styles from "./MemberPage.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import members from "../MembershipPage/members.json";
import advisors from "../MembershipPage/advisors.json";

export default function MemberPage() {

  const navigate = useNavigate();

  const { memberID } = useParams();
  const member = members.find((member) => member.name.toLowerCase().replaceAll(" ", "-") === memberID?.toLowerCase()) ?? advisors.find((member) => member.name.toLowerCase().replaceAll(" ", "-") === memberID?.toLowerCase());

  const [imageSource, setImageSource] = useState<string>("");

  useEffect(() => {

    (async () => {

      if (member) {

        let imageSourceModule;

        try {
          
          imageSourceModule = await (await import(`../MembershipPage/images/${member.name.toLowerCase().replaceAll(" ", "-")}.jpg`));

        } catch (error) {

          imageSourceModule = await (await import(`../MembershipPage/images/default.png`));

        }

        setImageSource(imageSourceModule.default);

      } else {

        navigate("/", {replace: true});

      }

    })();

  }, [member]);


  if (member) {

    document.title = `${member.name} from the College Democrats at Central Michigan University`;

    const paragraphs = [];
    let remainingText = member.description;
    while (remainingText.indexOf("\n") !== -1) {

      const textSegment = remainingText.slice(0, remainingText.indexOf("\n"));
      paragraphs.push(textSegment);

      remainingText = remainingText.slice(remainingText.indexOf("\n") + 1);

    }

    if (remainingText.trim()) {

      paragraphs.push(remainingText);

    }

    console.log(paragraphs)

    return (
      <main id={styles.main}>
        <section>
          <section id={styles.imageContainer}>
            <img src={imageSource} style={{
              objectPosition: `${member.objectPosition[0] * 2}px ${member.objectPosition[1] * 2}px`,
              width: member.width ? `${member.width}%` : undefined
            }} />
          </section>
          <h1>{member.name}</h1>
          <p>{member.title} of the College Democrats at Central Michigan University</p>
        </section>
        {
          paragraphs.length > 0 ? (
            <section>
              {
                paragraphs.map((paragraphText, index) => <p key={index}>
                  {paragraphText}
                </p>)
              }
            </section>
          ) : null
        }
        <section>
          <span>
            <button onClick={() => location.href = `mailto:${member.emailAddress}`}>Email {member.name}</button>
          </span>
        </section>
      </main>
    );
   

  }
  
  return null;

}