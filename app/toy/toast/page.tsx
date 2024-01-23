import styles from "./toast.module.scss";
import React from "react";
import ToastForm from "./ToastForm/ToastForm";
import ToastList from "./ToastList/ToastList";
import InitPopup from "../init/init";

export default function ToastPage() {
  return (
    <article className={styles.toySection}>
      {/* INIT POPUP */}
      <InitPopup />

      <section className={styles.toastPage}>
        {/* TOAST AREA */}
        <ToastList />

        {/* TOAST EDIT */}
        <ToastForm />
      </section>
    </article>
  );
}
