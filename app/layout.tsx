"use client";
import "./globals.css";
import { RecoilRoot } from "recoil";

export interface children {
  children: React.ReactNode;
}

export default function RootLayout({ children }: children) {
  return (
    <html lang="ko">
      <body>
        <RecoilRoot>
          {children}

          {/* MODAL AREA */}
          <div id="modal"></div>
        </RecoilRoot>
      </body>
    </html>
  );
}
