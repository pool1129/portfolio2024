"use client";

import styled, { keyframes } from "styled-components";
import styles from "../toast.module.scss";
import { ToastType } from "@/stores/toast/store";

const ToastCard = ({ id, title, desc, time, icon }: ToastType) => {
  const timeAni = keyframes`
    0% {
      width: 100%;
    }
    100%{
      width: 0;
    }
  `;

  const Time = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #e5430f;
    animation: ${timeAni} ${time}ms linear;
  `;

  return (
    <div className={`${styles.toastCard}`} key={id}>
      {id}
      <i>
        {icon == "success" && "😍"}
        {icon == "warning" && "😳"}
        {icon == "error" && "😡"}
      </i>
      <div className={styles.toastText}>
        <p>{title}</p>
        <span>{desc}</span>
      </div>
      <Time>
        <div className={`${styles.toastTime}`}></div>
      </Time>
    </div>
  );
};

export default ToastCard;
