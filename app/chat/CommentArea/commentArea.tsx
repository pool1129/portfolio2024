"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import styles from "../chat.module.scss";
import { chatApi } from "../api";

const CommentArea: React.FC<UserInfo> = ({ user }) => {
  const { insertCommontApi } = chatApi();
  const methods = useForm<UserInfo>({ mode: "onChange" });

  const onSubmit = async (data: UserInfo) => {
    insertCommontApi(data);
    methods.reset();
  };

  useEffect(() => {
    methods.setValue("user", user);
  });

  return (
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
  );
};

export default CommentArea;
