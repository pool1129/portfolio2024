import React from "react";
import DrawMark from "./drawCanvas/drawCanvas";
import UploadMark from "./uploadMark/uploadMark";
import UploadBack from "./uploadBack/uploadBack";

import styles from "./mark.module.scss";

export default function MarkPage() {
  return (
    <div className={styles.markPage}>
      <div className={styles.optionArea}>
        {/* BACKGROUND IMG */}
        <UploadBack />

        {/* WATERMARK IMG */}
        <UploadMark />
      </div>

      {/* PREVIEW IMG */}
      <DrawMark />
    </div>
  );
}
