import React from "react";
import TodoForm from "./TodoForm/todoForm";
import { cookies } from "next/headers";
import InitPopup from "../init/init";

import styles from "./todo.module.scss";

export default function TodoPage() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("login-number");

  return (
    <article className={styles.toySection}>
      {/* INIT POPUP */}
      <InitPopup />

      <section className={styles.loginPage}>
        <TodoForm {...cookie} />
      </section>
    </article>
  );
}
