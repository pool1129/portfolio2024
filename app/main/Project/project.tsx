"use client";

import Link from "next/link";

import styles from "../main.module.scss";
import styled from "styled-components";

const ProjectWrap = styled("div")<{ $color: string }>`
  &:before {
    background-color: ${(props) => props.$color};
  }
`;

export default function Project({ ...data }: ProjectType) {
  return (
    <ProjectWrap $color={data.color} className={styles.projectWrap}>
      <Link href={data.projectLink}>
        <div className={styles.project}>
          <div className={styles.projectText}>
            <figure></figure>
            <h3>{data.projectName}</h3>
          </div>

          <div className={styles.projectType}>
            <span>{data.projectType}</span>
            <i></i>
          </div>
        </div>
      </Link>
    </ProjectWrap>
  );
}
