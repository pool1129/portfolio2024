"use client";

import React, { useState } from "react";

import styles from "./markOption.module.scss";

export default function MarkOption() {
  const [option, setOption] = useState("text");

  return (
    <div className={styles.waterOption}>
      <label>워터마크 타입</label>
      <select onChange={(e) => setOption(e.currentTarget.value)}>
        <option value="text">텍스트</option>
        <option value="img">이미지</option>
      </select>

      {option == "text" ? (
        <div className={styles.markText}>
          <label>텍스트</label>
          <input type="text" placeholder="워터마크 텍스트를 입력해 주세요." />
        </div>
      ) : (
        <div className={styles.markImg}>
          <label>이미지</label>
          <div>
            <label className={styles.fileBtn} htmlFor="water">
              업로드
            </label>
            <input type="file" id="water" />
          </div>
        </div>
      )}
    </div>
  );
}
