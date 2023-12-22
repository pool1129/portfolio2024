"use client";

import React from "react";
import { useMark } from "@/hooks/mark";
import { waterPosState } from "@/stores/mark/store";
import { useSetRecoilState } from "recoil";

import DrawCanvasBtn from "../drawCanvasBtn/drawCanvasBtn";

import styles from "../mark.module.scss";

export default function MarkOption() {
  const setWaterImg = useSetRecoilState(waterPosState);
  const { fileHandler } = useMark();

  return (
    <form className={styles.markOption}>
      {/* BACK IMG */}
      <label>배경 이미지</label>
      <label className={styles.fileBtn} htmlFor="back">
        업로드
      </label>
      <input type="file" id="back" onChange={fileHandler} />

      {/* MARK POSITION */}
      <label>워터마크 위치</label>
      <select onChange={(e) => setWaterImg(e.currentTarget.value)}>
        <option value="center">중간</option>
        <option value="leftBtm">왼쪽 하단</option>
        <option value="leftTop">왼쪽 상단</option>
        <option value="rightBtm">오른쪽 하단</option>
        <option value="rightTop">오른쪽 상단</option>
      </select>

      {/* MARK IMG */}
      <label>워터마크 이미지</label>
      <label className={styles.fileBtn} htmlFor="water">
        업로드
      </label>
      <input type="file" id="water" onChange={fileHandler} />

      <DrawCanvasBtn />
    </form>
  );
}
