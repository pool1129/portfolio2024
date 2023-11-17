"use client";

import React from "react";
import { useMark } from "@/hooks/mark";
import { waterPosState } from "@/stores/mark/store";

import DrawCanvasBtn from "../drawCanvasBtn/drawCanvasBtn";
import styles from "./markOption.module.scss";
import { useSetRecoilState } from "recoil";

export default function MarkOption() {
  const setWaterImg = useSetRecoilState(waterPosState);
  const { fileHandler } = useMark();

  return (
    <>
      <div className={styles.markOption}>
        {/* BACK IMG */}
        <div>
          <label>배경 이미지</label>
          <label className={styles.fileBtn} htmlFor="back">
            업로드
          </label>
          <input type="file" id="back" onChange={fileHandler} />
        </div>

        {/* MARK POSITION */}
        <div className={styles.markPos}>
          <label>워터마크 위치</label>
          <select onChange={(e) => setWaterImg(e.currentTarget.value)}>
            <option value="center">중간</option>
            <option value="leftBtm">왼쪽 하단</option>
            <option value="leftTop">왼쪽 상단</option>
            <option value="rightBtm">오른쪽 하단</option>
            <option value="rightTop">오른쪽 상단</option>
          </select>
        </div>

        {/* MARK IMG */}
        <div className={styles.markImg}>
          <label>워터마크 이미지</label>
          <label className={styles.fileBtn} htmlFor="water">
            업로드
          </label>
          <input type="file" id="water" onChange={fileHandler} />
        </div>
      </div>

      <DrawCanvasBtn />
    </>
  );
}
