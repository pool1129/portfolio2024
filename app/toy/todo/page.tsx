import React from "react";
import TodoForm from "./TodoForm/todoForm";
import { cookies } from "next/headers";
import InitPopup from "../init/initPopup";

import styles from "./todo.module.scss";

export default function TodoPage() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("login-number");

  return (
    <section className={`${styles.toySection} ${styles.loginPage}`}>
      {/* INIT POPUP */}
      <InitPopup />

      <TodoForm {...cookie} />
    </section>
  );
}
