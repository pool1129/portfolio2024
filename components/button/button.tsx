"use client";

import { useState, MouseEvent } from "react";
import styled from "styled-components";

const ButtonStyle = styled("button")<{ $posx: number; $posy: number }>`
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  color: #333

  height: auto;
  font-size: 1.5rem;
  font-weight: 400;

  line-height: 1.5;
  cursor: pointer;
  border-radius: 25px;
  will-change: transform;
  transition: transform 1000ms cubic-bezier(0.23, 1, 0.32, 1);
  transform: translate(
    ${(props) => `${props.$posx}px`},
    ${(props) => `${props.$posy}px`}
  );

  &:before {
    display: inline-block;
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: -1;
    width: 200px;
    height: 200px;
    background-color: #333;
    content: "";
    border-radius: 50%;
    transform: translate(-50%, 0);
  }

  &:hover,
  &.active {
    color: #fff;

    &:before {
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media (min-width: 758px) and (max-width: 1023px}) {  
    font-size: 14px;
  }
}
`;

type ButtonProps = {
  text: string;
  check: boolean;
};

export default function Button({ text, check }: ButtonProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMoveIn = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePos({
      x: Math.floor(e.clientX - (rect.width / 2 + rect.left)),
      y: Math.floor(e.clientY - (rect.height / 2 + rect.top)),
    });
  };

  const handleMoveOut = () => {
    setMousePos({
      x: 0,
      y: 0,
    });
  };

  return (
    <ButtonStyle
      type="button"
      className={check ? "active" : ""}
      $posx={mousePos.x}
      $posy={mousePos.y}
      onMouseMove={(e) => handleMoveIn(e)}
      onMouseLeave={handleMoveOut}
    >
      {text}
    </ButtonStyle>
  );
}
