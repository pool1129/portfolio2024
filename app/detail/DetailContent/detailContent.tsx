import Button from "@/components/button/button";

import styles from "../detail.module.scss";

export default function DetailContent() {
  return (
    <article className={styles.detail_content}>
      <div className={styles.container}>
        <div className={styles.content_left}>
          <h4>TEST</h4>

          <ul>
            <li>
              <small>Category.</small>
              <span>Web/Mobile</span>
            </li>

            <li>
              <small>Category.</small>
              <span>Web/Mobile</span>
            </li>

            <li>
              <small>Category.</small>
              <span>Web/Mobile</span>
            </li>
          </ul>

          <Button text={"사이트 바로가기"} check={false}></Button>
        </div>

        <div className={styles.content_right}>
          <div className={styles.line_text}>
            <p>Brief</p>
            <hr />
            <span>
              롯데백화점 웹사이트는 트렌디한 브랜드 이미지 전달과 매력적인
              콘텐츠를 제공하는 플랫폼으로의 변화를 목표로 리뉴얼되었습니다.
              단순히 정보를 제공하는 플랫폼을 넘어 브랜드에 대한 경험과
              스토리텔링을 풀어내는 공간으로 구현하고자 하였습니다.
            </span>
          </div>

          <div className={styles.line_text}>
            <p>Brief</p>
            <hr />
            <span>
              롯데백화점 웹사이트는 트렌디한 브랜드 이미지 전달과 매력적인
              콘텐츠를 제공하는 플랫폼으로의 변화를 목표로 리뉴얼되었습니다.
              단순히 정보를 제공하는 플랫폼을 넘어 브랜드에 대한 경험과
              스토리텔링을 풀어내는 공간으로 구현하고자 하였습니다.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
