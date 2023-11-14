"use client";

import React, { useEffect, useRef, useState } from "react";

const DrawCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    const backImg = new Image();
    backImg.src =
      "https://beautyall.app/files/W000/brand/brand-e1ff25a0-e085-4c77-b5fd-2a6952ab57d7.png";

    const waterImg = new Image();
    waterImg.src =
      "https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2023/1/27/JK_CO_A5L32sk23012718580015.png?v=202310281325";

    backImg.onload = function () {
      if (!ctx) return;

      setWidth(backImg.naturalWidth);
      setHeight(backImg.naturalHeight);

      ctx.drawImage(backImg, 0, 0, width, height);
      ctx.globalAlpha = 0.5;
      ctx.drawImage(waterImg, 0, 0, width, height);
    };
  }, [canvasRef, height, width]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default DrawCanvas;
