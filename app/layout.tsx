"use client";

import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import Loading from "./loading";
import Cursor from "@/components/cursor/cursor";

import "./globals.css";

export interface children {
  children: React.ReactNode;
}

export default function RootLayout({ children }: children) {
  return (
    <html lang="ko">
      <body>
        <RecoilRoot>
          {/* PAGE AREA */}
          <Suspense fallback={<Loading />}>{children}</Suspense>

          {/* MODAL AREA */}
          <div id="modal"></div>

          {/* CURSOR */}
          <Cursor />
        </RecoilRoot>
      </body>
    </html>
  );
}
