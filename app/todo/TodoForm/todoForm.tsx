"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CommentArea from "../CommentArea/commentArea";

export default function TodoForm({ value }: CookieType) {
  const [comments, setCommenets] = useState<Comment[]>();
  const [number, setNumber] = useState(value);
  const methods = useForm<UserInfo>({ mode: "onChange" });

  const onSubmit = async (formData: UserInfo) => {
    await axios
      .post("/api/todo/insertUser", JSON.stringify(formData))
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        const resultList = data.result;

        if (result.statusCode == 200) {
          setNumber(formData.user);
          setCommenets(resultList);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  };

  const getCommentApi = () => {
    axios
      .get("/api/todo/getComment")
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

  if (!comments) {
    return getCommentApi();
  }

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
        <CommentArea user={number} data={comments} />
      )}
    </>
  );
}
