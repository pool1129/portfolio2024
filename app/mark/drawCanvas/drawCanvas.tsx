"use client";

import { backImgState, waterImgState } from "@/stores/mark/store";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

const DrawCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const _waterImg = useRecoilValue(waterImgState);
  const _backImg = useRecoilValue(backImgState);

  const [state, setState] = useState({
    x: 10,
    y: 10,
  });

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    const backImg = new Image();
    backImg.src = _backImg;

    const waterImg = new Image();
    waterImg.src = _waterImg;

    backImg.onload = function () {
      if (!ctx) return;

      setWidth(backImg.naturalWidth);
      setHeight(backImg.naturalHeight);

      ctx.drawImage(backImg, 0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.drawImage(
        waterImg,
        state.x,
        state.y,
        waterImg.width / 2,
        waterImg.height / 2
      );
    };
  }, [canvasRef, height, state.x, state.y, width, _waterImg, _backImg]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default DrawCanvas;
