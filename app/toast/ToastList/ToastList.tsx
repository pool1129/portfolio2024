"use client";

import { useRecoilValue } from "recoil";
import { filterToastListState } from "@/stores/toast/store";
import { MemoizedCard } from "../ToastCard/toastCard";

import React from "react";

export default function ToastList() {
  const toastList = useRecoilValue(filterToastListState);

  return (
    <>
      {toastList.map((toast) => (
        <MemoizedCard
          key={toast.id}
          id={toast.id}
          title={toast.title}
          desc={toast.desc}
          icon={toast.icon}
          time={toast.time}
        />
      ))}
    </>
  );
}
