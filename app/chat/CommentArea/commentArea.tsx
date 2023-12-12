"use client";

import React, { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CommonList from "./commentList";

import styles from "../chat.module.scss";

export default function CommentArea({ user }: UserInfo) {
  const [comments, setCommenets] = useState<string>("N");
  const methods = useForm<UserInfo>({ mode: "onChange" });

  const onSubmit = async (data: UserInfo) => {
    insertCommontApi(data);
    methods.reset();
  };

  const insertCommontApi = (data: UserInfo) => {
    axios
      .post("/api/chat/insertComment", JSON.stringify(data))
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        const resultList = data.result;

        if (result.statusCode == 200) {
          alert("추가되었습니다.");
          setCommenets("Y");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    methods.setValue("user", user);
  });

  return (
    <>
      <form
        className={styles.commentForm}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <label>{user} 님의 하실 일</label>
        <input
          type="text"
          placeholder="업무를 입력해 주세요."
          {...methods.register("comment", { required: true, maxLength: 80 })}
        />

        <button type="submit">TODO 저장</button>
      </form>

      {/* COMMENT AREA */}
      <CommonList data={comments} />
    </>
  );
}
