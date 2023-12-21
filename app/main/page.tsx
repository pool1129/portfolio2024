import React from "react";

import PROJECT_LIST from "@/constants/projectData";
import Project from "./Project/project";
import Button from "@/components/button/button";

import styles from "./main.module.scss";

export default function MainPage() {
  return (
    <main>
      <article className={styles.mainHead}>
        <div className={styles.container}>
          <h2>Project</h2>

          <div className={styles.mainSort}>
            <Button text={"All"} check={true} />
            <Button text={"Web/Mobile"} check={false} />
            <Button text={"Toy"} check={false} />
            <Button text={"Design"} check={false} />
          </div>
        </div>
      </article>

      <article className={styles.mainList}>
        <div className={styles.container}>
          {PROJECT_LIST.map((data: ProjectType) => {
            return <Project key={data.id} {...data} />;
          })}
        </div>
      </article>
    </main>
  );
}
