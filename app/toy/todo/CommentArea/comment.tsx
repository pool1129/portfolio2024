"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";

import styles from "../todo.module.scss";

const Comment = ({ _id, comment, date, editYn }: Comment) => {
  const [show, setShow] = useState(true);
  const [input, setInput] = useState("");

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const delCommentApi = (id: string) => {
    axios
      .delete("/api/todo/delComment", { data: { id: id } })
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;

        if (result.statusCode == 200) {
          alert("삭제되었습니다.");
          setShow((prev) => !prev);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCommentApi = (id: string, input: string) => {
    axios
      .patch("/api/todo/updateComment", { id: id, comment: input })
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;

        if (result.statusCode == 200) {
          alert("수정되었습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {show && (
        <li>
          <div className={styles.textWrap}>
            {editYn == "Y" ? (
              <input
                type="text"
                defaultValue={comment}
                onChange={(e) => handleComment(e)}
              />
            ) : (
              <p>{comment}</p>
            )}
            <span>{dayjs(date).format("YYYY-MM-DD")}</span>
          </div>
          <div className={styles.btnWrap}>
            <i onClick={() => delCommentApi(_id)}>❌</i>
            {editYn == "Y" ? (
              <i onClick={() => updateCommentApi(_id, input)}>⭕</i>
            ) : (
              ""
            )}
          </div>
        </li>
      )}
    </>
  );
};

export default Comment;
