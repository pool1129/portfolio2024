"use client";

import styles from "../toast.module.scss";
import { ToastType } from "@/stores/toast/store";
import { MemoizedTime } from "../ToastTime/ToastTime";
import React from "react";

const ToastCard = ({ id, title, desc, time, icon }: ToastType) => {
  return (
    <div className={`${styles.toastCard}`} key={id}>
      <i>
        {icon == "success" && "😍"}
        {icon == "warning" && "😳"}
        {icon == "error" && "😡"}
      </i>
      <div className={styles.toastText}>
        <p>{title}</p>
        <span>{desc}</span>
      </div>

      <MemoizedTime time={time} />
    </div>
  );
};

export const MemoizedCard = React.memo(ToastCard);
