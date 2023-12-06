"use client";

import axios from "axios";

import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";

import styles from "../login.module.scss";

interface Comment {
  _id: string;
  number: string;
  comment: string;
  date: string;
  editYn: string;
}

const CommentList = () => {
  const [comments, setCommenets] = useState<Comment[]>();
  const [comment, setComment] = useState("");

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const getComment = () => {
    axios
      .get("/api/getComment")
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        const resultList = data.result;
        if (result.statusCode == 200) {
          setCommenets(resultList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delComment = (id: string) => {
    axios
      .delete("/api/delComment", { data: { id: id } })
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        if (result.statusCode == 200) {
          alert("해당 댓글이 삭제되었습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateComment = (id: string) => {
    axios
      .patch("/api/updateComment", { id: id, comment: comment })
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        if (result.statusCode == 200) {
          alert("해당 댓글이 수정되었습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getComment();

    setInterval(() => {
      getComment();
    }, 5000);
  }, []);

  return (
    <ul className={styles.commentList}>
      {comments &&
        comments.map((ele, index) => {
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
              {ele.editYn == "Y" ? (
                <div className={styles.btnWrap}>
                  <i onClick={() => delComment(ele._id)}>❌</i>
                  <i onClick={() => updateComment(ele._id)}>⭕</i>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
    </ul>
  );
};

export const MemoCommentList = React.memo(CommentList);
