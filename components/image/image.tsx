import Image from "next/image";

import Test from "../../public/png/test1.png";

import styles from "./image.module.scss";

export const ZoomOutImg = () => {
  return (
    <div className={styles.img_wrap}>
      <Image
        src={Test}
        alt="이미지"
        style={{
          transform: "scale(1.6, 1.6)",
        }}
      />
    </div>
  );
};
