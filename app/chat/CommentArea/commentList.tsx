"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import styles from "../chat.module.scss";
import { chatApi } from "../api";

interface CommentList {
  array: Comment[];
  status: boolean;
}

const CommonList = () => {
  const [comments, setCommenets] = useState<CommentList>({
    array: [],
    status: true,
  });
  const [comment, setComment] = useState("");
  const { getCommentApi } = chatApi(setCommenets);
  const { delCommentApi, updateCommentApi } = chatApi();

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  // useEffect(() => {
  //   console.log(comments);

  //   if (comments.status) {
  //     getCommentApi();
  //   }

  //   setCommenets({
  //     array: comments.array,
  //     status: false,
  //   });
  // }, [comments.array]);

  useEffect(() => {
    getCommentApi();
  }, []);

  return (
    <ul className={styles.commentList}>
      {comments.array.length > 0 &&
        comments.array.map((ele, index) => {
          return (
            <li key={index}>
              <div className={styles.textWrap}>
                {ele.editYn == "Y" ? (
                  <input
                    type="text"
                    defaultValue={ele.comment}
                    onChange={(e) => handleComment(e)}
                  />
                ) : (
                  <p>{ele.comment}</p>
                )}
                <span>{dayjs(ele.date).format("YYYY-MM-DD")}</span>
              </div>
              <div className={styles.btnWrap}>
                <i onClick={() => delCommentApi(ele._id)}>❌</i>
                {ele.editYn == "Y" ? (
                  <i onClick={() => updateCommentApi(ele._id, comment)}>⭕</i>
                ) : (
                  ""
                )}
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export const MemoCommentList = React.memo(CommonList);
