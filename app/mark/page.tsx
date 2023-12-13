import React from "react";
import DrawMark from "./drawCanvas/drawCanvas";
import MarkOption from "./markOption/markOption";

import styles from "./mark.module.scss";

export default function MarkPage() {
  return (
    <section className={styles.markPage}>
      {/* WATERMARK IMG */}
      <MarkOption />
    </section>
  );
}
