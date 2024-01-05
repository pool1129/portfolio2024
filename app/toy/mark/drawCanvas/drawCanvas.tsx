"use client";

import {
  backImgState,
  waterImgState,
  waterOpacityState,
} from "@/stores/mark/store";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilValue } from "recoil";
import { useMark } from "@/hooks/mark";

import styles from "../mark.module.scss";

const DrawCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setPosition } = useMark();
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const _waterImg = useRecoilValue(waterImgState);
  const _backImg = useRecoilValue(backImgState);
  const _waterOpacity = useRecoilValue(waterOpacityState);

  const saveImg = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const img = canvasRef.current?.toDataURL();
    const target = e.currentTarget;

    target.href = img!;
    target.download = "워터마크 이미지";
    target.click();
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    ctx?.clearRect(0, 0, Number(width), Number(height));

    const backImg = new Image();
    backImg.src = _backImg.img;

    const waterImg = new Image();
    waterImg.src = _waterImg.img;

    backImg.onload = function () {
      let { xPos, yPos } = setPosition(_backImg, _waterImg);
      if (!ctx) return;

      setWidth(_backImg.width);
      setHeight(_backImg.height);

      ctx.globalAlpha = 1;
      ctx.drawImage(backImg, 0, 0, Number(width), Number(height));
      ctx.globalAlpha = _waterOpacity;
      ctx.drawImage(
        waterImg,
        xPos,
        yPos,
        Number(_waterImg.width),
        Number(_waterImg.height)
      );
    };
  }, [_backImg, _waterImg, _waterOpacity, height, setPosition, width]);

  return (
    <div className={styles.drawCanvas}>
      <a onClick={(e) => saveImg(e)}>다운로드</a>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default DrawCanvas;
