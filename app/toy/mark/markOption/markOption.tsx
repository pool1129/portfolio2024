"use client";

import React from "react";
import { useMark } from "@/hooks/mark";
import { waterPosState, waterOpacityState } from "@/stores/mark/store";
import { useSetRecoilState } from "recoil";

import DrawCanvas from "../drawCanvas/drawCanvas";

import styles from "../mark.module.scss";

const waterPos = [
  "중간,center",
  "왼쪽 하단,leftBtm",
  "왼쪽 상단,leftTop",
  "오른쪽 하단,rightBtm",
  "오른쪽 상단,rightTop",
];

const waterOpacity = [0, 0.5, 1];

export default function MarkOption() {
  const setWaterImg = useSetRecoilState(waterPosState);
  const setWaterOpacity = useSetRecoilState(waterOpacityState);
  const { fileHandler, sizeHandler } = useMark();

  return (
    <>
      <form className={styles.markOption}>
        {/* BACK IMG */}
        <div className={styles.optionWrap}>
          <label>
            배경 이미지 / 사이즈
            <small>※최대값 및 기본값은 1024px입니다</small>
          </label>

          <div className={styles.option}>
            <div className={styles.fileWrap}>
              <label className={styles.fileBtn} htmlFor="back">
                업로드
              </label>
              <input type="file" id="back" onChange={fileHandler} />
            </div>

            <div className={styles.inputWrap}>
              <input
                type="text"
                id="back-width"
                placeholder="가로 (px)"
                onChange={sizeHandler}
              />
              <input
                type="text"
                id="back-height"
                placeholder="세로 (px)"
                onChange={sizeHandler}
              />
            </div>
          </div>
        </div>

        {/* MARK IMG */}
        <div className={styles.optionWrap}>
          <label>
            워터마크 이미지 / 사이즈
            <small>※최대값 및 기본값은 1024px입니다</small>
          </label>

          <div className={styles.option}>
            <div className={styles.fileWrap}>
              <label className={styles.fileBtn} htmlFor="water">
                업로드
              </label>
              <input type="file" id="water" onChange={fileHandler} />
            </div>

            <div className={styles.inputWrap}>
              <input
                type="text"
                placeholder="가로 (px)"
                id="water-width"
                onChange={sizeHandler}
              />
              <input
                type="text"
                placeholder="세로 (px)"
                id="water-height"
                onChange={sizeHandler}
              />
            </div>
          </div>
        </div>

        {/* MARK POSITION */}
        <div className={styles.optionWrap}>
          <label>워터마크 위치</label>

          <div className={styles.radioWrap}>
            {waterPos.map((ele, index) => {
              return (
                <div key={index}>
                  <input type="radio" name="waterPos" id={ele.split(",")[0]} />
                  <label
                    key={index}
                    htmlFor={ele.split(",")[0]}
                    onClick={() => setWaterImg(ele.split(",")[1])}
                  >
                    {ele.split(",")[0]}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.optionWrap}>
          <label>워터마크 투명도</label>

          <div className={styles.radioWrap}>
            {waterOpacity.map((ele, index) => {
              return (
                <div key={index}>
                  <input type="radio" name="waterOpacity" id={String(ele)} />
                  <label
                    key={index}
                    htmlFor={String(ele)}
                    onClick={() => setWaterOpacity(ele)}
                  >
                    {ele}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <DrawCanvas />
      </form>
    </>
  );
}
