"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import styles from "../login.module.scss";

type UserProps = {
  user?: string;
  comment?: string;
};

const CommentArea: React.FC<UserProps> = ({ user }) => {
  const methods = useForm<UserProps>({ mode: "onChange" });

  useEffect(() => {
    methods.setValue("user", user);
  }, []);

  const onSubmit = async (data: UserProps) => {
    await axios
      .post("/insertComment", JSON.stringify(data))
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        if (result.statusCode == 200) {
          alert("댓글 추가 완료");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  return (
    <form
      className={styles.commentForm}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <label>{user} 님의 남기실 말</label>
      <input
        type="text"
        placeholder="남기고 싶은 말을 입력해 주세요."
        {...methods.register("comment", { required: true, maxLength: 80 })}
      />

      <button type="submit">DB 저장</button>
    </form>
  );
};

export default CommentArea;
