"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CommentArea from "../CommentArea/commentArea";
import CommentList from "../CommentArea/commentList";

interface UserInfo {
  number: string;
  comment: string;
  date: string;
}

export default function LoginForm() {
  const methods = useForm<UserInfo>({ mode: "onChange" });
  const [comments, setCommenets] = useState<UserInfo[]>();
  const [user, setUser] = useState<string>();

  const onSubmit = async (user: UserInfo) => {
    await axios
      .post("/insertUser", JSON.stringify(user))
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        const resultList = data.result;

        if (result.statusCode == 200) {
          setUser(user.number);
          setCommenets(resultList);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  };

  return (
    <>
      {user === undefined ? (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <label>휴대폰 번호</label>
          <input
            type="text"
            placeholder="-을 제외한 휴대폰 번호"
            {...methods.register("number", { required: true, maxLength: 80 })}
          />

          <button type="submit">댓글 보기</button>
        </form>
      ) : (
        <>
          <CommentArea user={user} />
          {comments && <CommentList data={comments} />}
        </>
      )}
    </>
  );
}
