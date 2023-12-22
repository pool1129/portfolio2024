"use client";

import Button from "@/components/button/button";
import ModalPortal from "@/components/modal/modalPortal";
import TOY_LIST from "@/constants/toyData";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styled from "styled-components";

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
  margin: 0 auto;
  padding: 100px 40px 60px 60px;
  max-width: 1460px;
  width: 100%;
  background: #fff;
  border-radius: 12px;

  small,
  span {
    font-size: 1.25rem;
    font-weight: 400;
  }

  .closeBtn {
    font-size: 1.25rem;
    font-weight: 400;
    text-decoration: underline;
    display: block;
    margin: 40px auto 0;
  }
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 5.625rem;
  font-weight: 700;
  margin: 10px 0 40px;

  p {
    -webkit-text-stroke: 1px #000;
    color: #fff;

    &:last-child {
      color: #000;
    }
  }
`;

const ModalContent = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 40px;
  color: #333;
`;

export default function InitPopup() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const pathname = usePathname();
  const result: ToyType[] = TOY_LIST.filter((list) => list.url === pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && !toggleBtn && (
        <ModalPortal>
          <Background>
            <ModalBox>
              <small>※ 어찌고 저찌고</small>

              <ModalTitle>
                <p>{result[0].title}</p>
                <p>{result[0].subtitle}</p>
              </ModalTitle>

              <ModalContent>
                <div
                  dangerouslySetInnerHTML={{ __html: result[0].content }}
                ></div>
              </ModalContent>

              <Button text={"땡때 보러가기"} check={false}></Button>

              <button
                type="button"
                className="closeBtn"
                onClick={() => setToggleBtn(true)}
              >
                닫기
              </button>
            </ModalBox>
          </Background>
        </ModalPortal>
      )}
    </>
  );
}
