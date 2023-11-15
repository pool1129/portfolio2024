"use client";

import React from "react";
import { useMark } from "@/hooks/mark";

import styles from "../mark.module.scss";

export default function UploadBack() {
  const { fileHandler } = useMark();

  return (
    <div className={styles.imgOption}>
      <label>배경 이미지</label>
      <label className={styles.fileBtn} htmlFor="back">
        업로드
      </label>
      <input type="file" id="back" onChange={fileHandler} />
    </div>
  );
}
