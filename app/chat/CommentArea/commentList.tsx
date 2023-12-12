"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import styles from "../chat.module.scss";
import axios from "axios";

type Props = {
  data: string;
};

const CommonList = (props: Props) => {
  const [comments, setCommenets] = useState<Comment[]>([]);
  const [comment, setComment] = useState("");

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const getCommentApi = async () => {
    await axios
      .get("/api/chat/getComment")
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        const resultList = data.result;
        if (result.statusCode == 200) {
          setCommenets([]);
          setCommenets(resultList);

          console.log(comments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delCommentApi = (id: string) => {
    axios
      .delete("/api/chat/delComment", { data: { id: id } })
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        const resultList = data.result;

        if (result.statusCode == 200) {
          alert("삭제되었습니다.");
          setCommenets(resultList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCommentApi = (id: string, comment: string) => {
    axios
      .patch("/api/chat/updateComment", { id: id, comment: comment })
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        const resultList = data.result;

        if (result.statusCode == 200) {
          alert("수정되었습니다.");
          setCommenets(resultList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCommentApi();
  }, [props]);

  return (
    <ul className={styles.commentList}>
      {comments.map((ele, index) => {
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

export default CommonList;
