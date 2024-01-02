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
    if (input === "") return;

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
          {editYn == "Y" ? (
            <input
              type="text"
              defaultValue={comment}
              onChange={(e) => handleComment(e)}
            />
          ) : (
            <p>{comment}</p>
          )}
          <div className={styles.editWrap}>
            <span>{dayjs(date).format("YYYY-MM-DD")}</span>
            <div className={styles.btnWrap}>
              {editYn == "Y" ? (
                <i onClick={() => updateCommentApi(_id, input)}>수정</i>
              ) : (
                ""
              )}
              <i onClick={() => delCommentApi(_id)}>삭제</i>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default Comment;
