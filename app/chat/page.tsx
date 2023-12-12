import React from "react";
import ChatForm from "./ChatForm/chatForm";
import { cookies } from "next/headers";

import styles from "./chat.module.scss";

export default function ChatPage() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("login-number");

  return (
    <div className={styles.loginPage}>
      <ChatForm {...cookie} />
    </div>
  );
}
