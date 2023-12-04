import React from "react";
import LoginForm from "./LoginForm/loginForm";

import styles from "./login.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      {/* LOGIN AREA */}
      <LoginForm />
    </div>
  );
}
