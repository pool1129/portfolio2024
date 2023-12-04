"use client";

import { useForm } from "react-hook-form";
import { ToastType } from "@/stores/toast/store";
import { useToast } from "@/hooks/toast";

import styles from "../toast.module.scss";

export default function ToastForm() {
  const { addToast } = useToast();
  const { register, reset, handleSubmit } = useForm<ToastType>();

  return (
    <>
      <form
        className={styles.toastForm}
        onSubmit={handleSubmit((data) => {
          addToast(data);
          reset();
        })}
      >
        <label>제목</label>
        <input
          type="text"
          placeholder="제목을 입력해 주세요"
          {...register("title", { required: true, maxLength: 80 })}
        />

        <label>설명</label>
        <input
          type="text"
          placeholder="설명을 입력해 주세요"
          {...register("desc", { required: true, maxLength: 100 })}
        />

        <label>시간</label>
        <input
          type="text"
          placeholder="유지시간을 입력해 주세요"
          {...register("time", { required: true, maxLength: 100 })}
        />

        <label>아이콘</label>
        <select {...register("icon", { required: true })}>
          <option value="success">😍 성공</option>
          <option value="warning">😳 주의</option>
          <option value="error">😡 실패</option>
        </select>

        <button type="submit">추가하기</button>
      </form>
    </>
  );
}
