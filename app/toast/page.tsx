"use client";

import styles from "./toast.module.scss";
import React from "react";
import ToastForm from "./ToastForm/ToastForm";
import ToastList from "./ToastList/OldList";

export default function ToastPage() {
  return (
    <div className={styles.toastPage}>
      {/* TOAST AREA */}
      <div className={styles.toastArea}>
        <ToastList />
      </div>

      {/* TOAST EDIT */}
      <ToastForm />
    </div>
  );
}
