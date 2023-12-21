"use client";

import { useState, MouseEvent } from "react";
import styled from "styled-components";

const ButtonStyle = styled("button")<{ $posx: number; $posy: number }>`
  will-change: transform;
  transition: color 0.4s, transform 0.4s;
  transform: translate(
    ${(props) => `${props.$posx}px`},
    ${(props) => `${props.$posy}px`}
  );

  &.active {
    color: #fff;

    &:before {
      top: 0;
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
