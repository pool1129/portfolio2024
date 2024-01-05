"use client";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { backImgState, waterImgState } from "@/stores/mark/store";
import styled from "styled-components";

import DrawCanvas from "../drawCanvas/drawCanvas";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: #232530;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  width: 190px;
  margin: 40px 0;
`;

export default function DrawCanvasBtn() {
  const _waterImg = useRecoilValue(waterImgState);
  const _backImg = useRecoilValue(backImgState);

  return (
    <>
      <Button type="button">워터마크 생성</Button>

      <Button type="button" >다운로드</Button>
      {/* PREVIEW IMG */}
      <DrawCanvas />
    </>
  );
}
