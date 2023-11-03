"use client";

import { read, utils } from "xlsx";
import React, { useState } from "react";

import styles from "./excel.module.scss";

export default function ExcelPage() {
  const [data, setData] = useState<any>();

  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = target.files;

    if (files === undefined || files === null) {
      return;
    }

    const download = await files[0].arrayBuffer();
    const excel = read(download);
    const sheet = excel.Sheets[excel.SheetNames[0]];
    const data = utils.sheet_to_json(sheet);

    setData(data);
  };

  return (
    <div className={styles.excelPage}>
      {/* EXCEL OPTION */}
      <div className={styles.excelOption}>
        <div>
          <label htmlFor="num">번호 제공 유무</label>
          <input type="checkbox" id="num" name="num" />
        </div>

        <div>
          <label htmlFor="color">타이틀 색상</label>
          <input type="color" id="color" name="color" />
        </div>

        <div>
          <label className={styles.fileBtn} htmlFor="file">
            업로드
          </label>
          <input type="file" id="file" onChange={fileChangeHandler} />
        </div>
      </div>

      {/* EXCEL TABLE */}
      <div className={styles.excelArea}>{data}</div>
    </div>
  );
}
