import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from "../login.module.scss";

interface Props {
  data: Array<Comment>;
}

interface Comment {
  number: string;
  comment: string;
  date: string;
}

const CommentList = ({ data }: Props) => {
  return (
    <ul className={styles.commentList}>
      {data.map((ele, index) => {
        return (
          <li key={index}>
            <p>{ele.comment}</p>
            <span>{ele.date}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
