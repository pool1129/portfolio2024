"use client";

import styles from "./toast.module.scss";
import React from "react";
import ToastForm from "./ToastForm/ToastForm";
import ToastList from "./ToastList/ToastList";

export default function ToastPage() {
  return (
    <section className={styles.toastPage}>
      {/* TOAST AREA */}
      <div className={styles.toastArea}>
        <ToastList />
      </div>

      {/* TOAST EDIT */}
      <ToastForm />
    </section>
  );
}
