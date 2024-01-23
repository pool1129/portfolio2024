"use client";

import { Suspense, useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { useMediaQuery } from "react-responsive";

import Loading from "./loading";
import Cursor from "@/components/cursor/cursor";

import "./globals.css";

export interface children {
  children: React.ReactNode;
}

export const PCLayout = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const isPc = useMediaQuery({ minWidth: 769 });

  const checkResize = () => {
    if (isPc) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isPc]);

  return mobile;
};

export default function RootLayout({ children }: children) {
  return (
    <html lang="ko">
      <body>
        <RecoilRoot>
          {/* PAGE AREA */}
          <Suspense fallback={<Loading />}>{children}</Suspense>

          {/* MODAL AREA */}
          <div id="modal"></div>

          {/* CURSOR - PC*/}
          {PCLayout() && <Cursor />}
        </RecoilRoot>
      </body>
    </html>
  );
}
