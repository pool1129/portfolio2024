import React from "react";
import MarkOption from "./markOption/markOption";
import InitPopup from "../init/initPopup";

import styles from "./mark.module.scss";

export default function MarkPage() {
  return (
    <section className={`${styles.toySection} ${styles.markPage}`}>
      {/* INIT POPUP */}
      <InitPopup />

      {/* WATERMARK IMG */}
      <MarkOption />
    </section>
  );
}
