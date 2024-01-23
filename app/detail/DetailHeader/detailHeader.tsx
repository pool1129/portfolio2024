import Image from "next/image";

import styles from "../detail.module.scss";

export default function DetailHeader() {
  return (
    <div className={styles.detailHead}>
      <div className={styles.container}>
        <span>Web/Mobile Site</span>

        <div className={styles.detailTitle}>
          <p>테스트</p>
          <p>사이트</p>
        </div>
      </div>

      <div className={styles.detailImg}>
        <Image src="" alt="메인 이미지" />
      </div>
    </div>
  );
}
