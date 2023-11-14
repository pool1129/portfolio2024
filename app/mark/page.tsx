import React from "react";

import styles from "./mark.module.scss";
import MarkOption from "./MarkOption/markOption";
import DrawMark from "./drawCanvas/drawCanvas";

export default function MarkPage() {
  return (
    <div className={styles.markPage}>
      <div className={styles.optionArea}>
        {/* BACKGROUND IMG */}
        <div className={styles.imgOption}>
          <label>배경 이미지</label>
          <div>
            <label className={styles.fileBtn} htmlFor="back">
              업로드
            </label>
            <input type="file" id="back" />
          </div>
        </div>

        {/* WATERMARK IMG */}
        <MarkOption />
      </div>

      {/* ASSEMBLE IMG */}

      <DrawMark />
    </div>
  );
}
