import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MemberButton.module.css";

export interface MemberButtonProperties {
  member: {
    name: string;
    title: string;
    term?: string;
    objectPosition: number[];
    imageWidth?: number;
  }
}

export default function MemberButton({member}: MemberButtonProperties) {

  const [imageSource, setImageSource] = useState<string | null>(null);

  useEffect(() => {

    (async () => {

      let imageSourceModule;
            
      try {
        
        imageSourceModule = await (await import(`../../images/${member.name.toLowerCase().replaceAll(" ", "-")}.jpg`));

      } catch (error) {

        imageSourceModule = await (await import(`../../images/default.png`));

      }

      setImageSource(imageSourceModule.default);

    })();

  }, []);

  return (
    <li className={styles.item}>
      <Link to={`/membership/${member.name.replaceAll(" ", "-").toLowerCase()}`}>
        <section className={styles.imageContainer}>
          {
            imageSource ? (
              <img src={imageSource} style={{
                objectPosition: `${member.objectPosition[0]}px ${member.objectPosition[1]}px`,
                width: member.imageWidth ? `${member.imageWidth}%` : undefined
              }} />
            ) : null
          }
        </section>
        <section>
          <b>{member.name}</b>
          <span>{member.title}</span>
        </section>
      </Link>
    </li>
  );

}