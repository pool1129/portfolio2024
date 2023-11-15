"use client";

import React, { useState } from "react";
import { useMark } from "@/hooks/mark";

import styles from "./uploadMark.module.scss";

export default function UploadMark() {
  const { fileHandler } = useMark();
  const [option, setOption] = useState("text");

  return (
    <div className={styles.waterOption}>
      <label>워터마크 위치</label>
      <select onChange={(e) => setOption(e.currentTarget.value)}>
        <option value="center">중간</option>
        <option value="left-btm">왼쪽 하단</option>
        <option value="left-top">왼쪽 상단</option>
        <option value="right-btm">오른쪽 하단</option>
        <option value="right-top">오른쪽 상단</option>
      </select>

      <div className={styles.markImg}>
        <label>이미지</label>
        <label className={styles.fileBtn} htmlFor="water">
          업로드
        </label>
        <input type="file" id="water" onChange={fileHandler} />
      </div>
    </div>
  );
}
