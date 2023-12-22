"use client";

import { backImgState, waterImgState } from "@/stores/mark/store";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilValue } from "recoil";
import { useMark } from "@/hooks/mark";

import DeleteIcon from "@public/svg/icon_close.svg";

import styles from "../mark.module.scss";

interface Props {
  setToggleBtn: Dispatch<SetStateAction<boolean>>;
}

const DrawCanvas = ({ setToggleBtn }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setPosition } = useMark();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const _waterImg = useRecoilValue(waterImgState);
  const _backImg = useRecoilValue(backImgState);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    const backImg = new Image();
    backImg.src = _backImg;

    const waterImg = new Image();
    waterImg.src = _waterImg;

    backImg.onload = function () {
      let { xPos, yPos } = setPosition(backImg, waterImg);
      if (!ctx) return;

      setWidth(backImg.naturalWidth / 2);
      setHeight(backImg.naturalHeight / 2);

      ctx.drawImage(backImg, 0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.drawImage(
        waterImg,
        xPos,
        yPos,
        waterImg.width / 4,
        waterImg.height / 4
      );
    };
  }, [canvasRef, height, width, _waterImg, _backImg, setPosition]);

  return (
    <div className={styles.drawCanvas}>
      <canvas ref={canvasRef} width={width} height={height} />

      <button type="button" onClick={() => setToggleBtn(false)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default DrawCanvas;
