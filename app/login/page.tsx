import React from "react";
import LoginForm from "./LoginForm/loginForm";
import { MemoCommentList } from "./CommentArea/commentList";
import { cookies } from "next/headers";

import styles from "./login.module.scss";

export default function LoginPage() {
  const cookieStore = cookies();
  const number = cookieStore.get("login-number");

  return (
    <div className={styles.loginPage}>
      <LoginForm {...number} />

      {/* COMMENT AREA */}
      <MemoCommentList />
    </div>
  );
}
