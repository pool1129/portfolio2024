/* eslint-disable @next/next/no-img-element */
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
  padding: 60px 20px 60px 20px;
  max-width: 1460px;
  width: 100%;
  max-width: 300px;
  background: #fff;
  border-radius: 12px;

  small {
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
  font-size: 5rem;
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
  white-space: pre;

  div {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export default function Init() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const pathname = usePathname();
  const result: ToyType[] = TOY_LIST.filter((list) => list.url === pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setToggleBtn(true);
    }
  };

  return (
    <>
      {mounted && !toggleBtn && (
        <ModalPortal>
          <Background onClick={(e) => handleOverlay(e)}>
            <ModalBox>
              <small>※ 해당 페이지는 모바일을 기준으로 제작되었습니다.</small>

              <ModalTitle>
                <p>{result[0].title}</p>
                <p>{result[0].subtitle}</p>
              </ModalTitle>

              <ModalContent>
                <p dangerouslySetInnerHTML={{ __html: result[0].content }}></p>

                <div>
                  {result[0].stack.map((ele, index) => {
                    return (
                      <img
                        key={index}
                        src={`https://img.shields.io/badge/${
                          ele.split(",")[0]
                        }?style=for-the-badge&logo=${
                          ele.split(",")[1]
                        }&logoColor=white`}
                        alt="기술 아이콘"
                      />
                    );
                  })}
                </div>
              </ModalContent>

              <Button text={"코드 보러가기"} check={false}></Button>

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
