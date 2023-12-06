"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CommentArea from "../CommentArea/commentArea";

interface UserInfo {
  number: string;
  comment: string;
  date: string;
}

interface Props {
  value?: string;
}

export default function LoginForm({ value }: Props) {
  const methods = useForm<UserInfo>({ mode: "onChange" });
  const [user, setUser] = useState<string>();

  const onSubmit = async (user: UserInfo) => {
    await axios
      .post("/api/insertUser", JSON.stringify(user))
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;

        if (result.statusCode == 200) {
          setUser(user.number);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  };

  return (
    <>
      {value === undefined ? (
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
        <CommentArea user={value} />
      )}
    </>
  );
}
