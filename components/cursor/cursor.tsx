"use client";

import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";

import CursorIcon from "@public/svg/icon_cursor.svg";

import styled from "styled-components";

const CursorStyle = styled("div")`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  z-index: 1000;
  user-select: none;
  pointer-events: none;
  transform: scale(1);
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1);
  mix-blend-mode: difference;

  svg {
    display: none;
  }

  &.active {
    background: transparent;

    svg {
      display: block;
    }
  }
`;

const FollowStyle = styled("div")`
  position: absolute;
  z-index: 1000;
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  box-sizing: border-box;
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
  transition: all 200ms cubic-bezier(0.19, 1, 0.22, 1);
  mix-blend-mode: difference;

  &.active {
    width: 80px;
    height: 80px;
    border-width: 3px;
  }
`;

export default function Cursor() {
  const [active, setActive] = useState<boolean>(false);
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  function handleMove(e: any) {
    const activeCursor = window.getComputedStyle(e.target).cursor === "pointer";
    activeCursor ? setActive(true) : setActive(false);

    gsap.to(cursor.current, {
      duration: 0.3,
      left: e.pageX - (activeCursor ? 10 : 5),
      top: e.pageY - (activeCursor ? 10 : 5),
    });
    gsap.to(follower.current, {
      duration: 0.8,
      left: e.pageX - (activeCursor ? 40 : 15),
      top: e.pageY - (activeCursor ? 40 : 15),
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);

    return () => {
      window.addEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <CursorStyle ref={cursor} className={active ? "active" : ""}>
        <CursorIcon />
      </CursorStyle>
      <FollowStyle
        ref={follower}
        className={active ? "active" : ""}
      ></FollowStyle>
    </>
  );
}
