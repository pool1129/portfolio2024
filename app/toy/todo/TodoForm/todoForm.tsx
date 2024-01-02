"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CommentArea from "../CommentArea/commentArea";
import HomeIcon from "@public/png/icon_home.png";

const TodoForm: React.FC<CookieType> = ({ value }) => {
  const [comments, setCommenets] = useState<Comment[]>();
  const [number, setNumber] = useState(value);
  const methods = useForm<UserInfo>({ mode: "onChange" });

  const deleteUser = () => {
    //FIXME: 클라이언트 사이드에서 쿠키 삭제?
    document.cookie =
      "login-number=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setNumber(undefined);
  };

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
          methods.reset();
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
    getCommentApi();
    return;
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

          <button type="submit">로그인</button>
        </form>
      ) : (
        <>
          <Image src={HomeIcon} alt="홈 아이콘" onClick={deleteUser} />
          <CommentArea user={number} data={comments} />
        </>
      )}
    </>
  );
};

export default TodoForm;
