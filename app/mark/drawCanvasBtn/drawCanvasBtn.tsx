"use client";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { backImgState, waterImgState } from "@/stores/mark/store";

import Modal from "@components/modal/modal";
import DrawCanvas from "../drawCanvas/drawCanvas";

import styles from "../mark.module.scss";

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
      <button type="button" onClick={handleClick}>
        워터마크 생성
      </button>

      {/* PREVIEW IMG */}
      {toggleBtn && (
        <Modal>
          <DrawCanvas setToggleBtn={setToggleBtn} />
        </Modal>
      )}
    </>
  );
}
