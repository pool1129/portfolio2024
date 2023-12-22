"use client";

import React from "react";

import styled, { keyframes } from "styled-components";
import styles from "../toast.module.scss";

export function ToastTime({ time }: any) {
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
    <Time>
      <div className={`${styles.toastTime}`}></div>
    </Time>
  );
}

export const MemoizedTime = React.memo(ToastTime);
