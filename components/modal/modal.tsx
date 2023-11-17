"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import ModalPortal from "./modalPortal";

interface Props {
  children: ReactNode;
}

const Background = styled.div`
  z-index: 999;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: #00000082;
`;

const ModalBox = styled.div`
  width: max-content;
  background-color: white;
`;

export default function Modal({ children }: Props) {
  return (
    <ModalPortal>
      <Background>
        <ModalBox>{children}</ModalBox>
      </Background>
    </ModalPortal>
  );
}
