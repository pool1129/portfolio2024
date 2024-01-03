"use client";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { backImgState, waterImgState } from "@/stores/mark/store";
import styled from "styled-components";

import Modal from "@components/modal/modal";
import DrawCanvas from "../drawCanvas/drawCanvas";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #232530;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  width: 190px;
  margin-top: 40px;
`;

export default function DrawCanvasBtn() {
  const _waterImg = useRecoilValue(waterImgState);
  const _backImg = useRecoilValue(backImgState);
  const [toggleBtn, setToggleBtn] = useState(false);

  const handleClick = () => {
    if (_backImg == "" || _waterImg == "") {
      alert("이미지를 업로드 해주세요.");
      return;
    }

    setToggleBtn(true);
  };

  return (
    <>
      <Button type="button" onClick={handleClick}>
        워터마크 생성
      </Button>

      {/* PREVIEW IMG */}
      {toggleBtn && (
        <Modal>
          <DrawCanvas setToggleBtn={setToggleBtn} />
        </Modal>
      )}
    </>
  );
}
