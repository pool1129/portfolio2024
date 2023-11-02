"use client";

import { useRecoilValue } from "recoil";
import { filterToastListState } from "@/stores/toast/store";

import React from "react";
import ToastCard from "../ToastCard/toastCard";

export default function ToastList() {
  const toastList = useRecoilValue(filterToastListState);

  return (
    <>
      {toastList.map((toast) => (
        <ToastCard
          key={toast.id}
          id={toast.id}
          title={toast.title}
          desc={toast.desc}
          icon={toast.icon}
          time={toast.time}
        />
      ))}{" "}
    </>
  );
}
