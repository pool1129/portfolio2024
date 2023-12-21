"use client";

import styled, { keyframes } from "styled-components";

const LoadingWrap = styled.div`
  z-index: 999;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
`;

const Load = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

const spin1 = keyframes`
  0% {transform: rotate(0deg);}
  25% {transform: rotate(360deg);}
  30% {transform: rotate(370deg);}
  35% {transform: rotate(360deg);}
  100% {transform: rotate(360deg);}
`;

const spin2 = keyframes`
  0% {transform: rotate(0deg);}
  20% {transform: rotate(0deg);}
  30% {transform: rotate(-180deg);}
  35% {transform: rotate(-190deg);}
  40% {transform: rotate(-180deg);}
  78% {transform: rotate(-180deg);}
  95% {transform: rotate(-360deg);}
  98% {transform: rotate(-370deg);}
  100% {transform: rotate(-360deg);}
}`;

const spin3 = keyframes`
  0% {transform: rotate(0deg);}
  27% {transform: rotate(0deg);}
  40% {transform: rotate(180deg);}
  45% {transform: rotate(190deg);}
  50% {transform: rotate(180deg);}
  62% {transform: rotate(180deg);}
  75% {transform: rotate(360deg);}
  80% {transform: rotate(370deg);}
  85% {transform: rotate(360deg);}
  100% {transform: rotate(360deg);}
`;

const spin4 = keyframes`
  0% {transform: rotate(0deg);}
  38% {transform: rotate(0deg);}
  60% {transform: rotate(-360deg);}
  65% {transform: rotate(-370deg);}
  75% {transform: rotate(-360deg);}
  100% {transform: rotate(-360deg);}
`;

const Dash = styled.div`
  margin: 0 10px;
  width: 20px;
  height: 10px;
  border-radius: 5px;
  background: #ff2cbd;
  box-shadow: 0 0 10px 0 #fecdff;

  &:nth-child(1) {
    margin-right: -10px;
    transform-origin: center left;
    animation: ${spin1} 3s linear infinite;
  }

  &:nth-child(2) {
    transform-origin: center right;
    animation: ${spin2} 3s linear infinite;
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    transform-origin: center right;
    animation: ${spin3} 3s linear infinite;
    animation-delay: 0.3s;
  }

  &:nth-child(4) {
    transform-origin: center right;
    animation: ${spin4} 3s linear infinite;
    animation-delay: 0.4s;
  }
`;

export default function Loading() {
  return (
    <LoadingWrap>
      <Load>
        <Dash></Dash>
        <Dash></Dash>
        <Dash></Dash>
        <Dash></Dash>
      </Load>
    </LoadingWrap>
  );
}
