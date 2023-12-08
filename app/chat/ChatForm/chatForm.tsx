"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CommentArea from "../CommentArea/commentArea";

export default function ChatForm({ value }: CookieType) {
  const methods = useForm<UserInfo>({ mode: "onChange" });
  const [number, setNumber] = useState(value);

  const onSubmit = async (formData: UserInfo) => {
    await axios
      .post("/api/chat/insertUser", JSON.stringify(formData))
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;

        if (result.statusCode == 200) {
          setNumber(formData.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  };

  return (
    <>
      {number === undefined ? (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <label>휴대폰 번호</label>
          <input
            type="text"
            placeholder="-을 제외한 휴대폰 번호"
            {...methods.register("user", { required: true, maxLength: 80 })}
          />

          <button type="submit">TODO 보기</button>
        </form>
      ) : (
        <CommentArea user={number} />
      )}
    </>
  );
}
