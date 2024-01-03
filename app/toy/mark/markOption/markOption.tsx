"use client";

import React from "react";
import { useMark } from "@/hooks/mark";
import { waterPosState } from "@/stores/mark/store";
import { useSetRecoilState } from "recoil";

import DrawCanvasBtn from "../drawCanvasBtn/drawCanvasBtn";

import styles from "../mark.module.scss";

const waterPos = [
  "중간,center",
  "왼쪽 하단,leftBtm",
  "왼쪽 상단,leftTop",
  "오른쪽 하단,rightBtm",
  "오른쪽 상단,rightTop",
];

export default function MarkOption() {
  const setWaterImg = useSetRecoilState(waterPosState);
  const { fileHandler } = useMark();

  return (
    <form className={styles.markOption}>
      <div className={styles.img}></div>

      {/* BACK IMG */}
      <div>
        <label>배경 이미지</label>

        <div className={styles.fileWrap}>
          <label className={styles.fileBtn} htmlFor="back">
            업로드
          </label>
          <input type="file" id="back" onChange={fileHandler} />
        </div>
      </div>

      {/* BACK SIZE */}
      <div>
        <label>배경 사이즈(px)</label>

        <div className={styles.inputWrap}>
          <input type="text" />
          <input type="text" />
        </div>
      </div>

      {/* MARK IMG */}
      <div>
        <label>워터마크 이미지</label>

        <div className={styles.fileWrap}>
          <label className={styles.fileBtn} htmlFor="water">
            업로드
          </label>
          <input type="file" id="water" onChange={fileHandler} />
        </div>
      </div>

      {/* MARK POSITION */}
      <div>
        <label>워터마크 위치</label>

        <div className={styles.radioWrap}>
          {waterPos.map((ele, index) => {
            return (
              <label key={index} onClick={() => setWaterImg(ele.split(",")[0])}>
                <input type="radio" name="waterPos" />
                {ele.split(",")[0]}
              </label>
            );
          })}
        </div>
      </div>

      <DrawCanvasBtn />
    </form>
  );
}
