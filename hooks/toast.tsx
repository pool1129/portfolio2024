import { ToastType, toastListState } from "@/stores/toast/store";
import { useRecoilState } from "recoil";

let id = 0;
function getId() {
  return id++;
}

const delItemId = (arr: ToastType[], id: number): ToastType[] => {
  return [...arr.slice(0, id), ...arr.slice(id + 1)];
};

export function useToast() {
  const [toastList, setToastList] = useRecoilState(toastListState);

  const delToast = (toastId: number) => {
    const newList = delItemId(toastList, toastId);

    setToastList(newList);
  };

  const addToast = (toast: ToastType) => {
    setToastList((oldList) => [
      ...oldList,
      {
        id: getId(),
        title: toast.title,
        desc: toast.desc,
        time: toast.time,
        icon: toast.icon,
      },
    ]);

    setTimeout(() => {
      delToast(toast.id);
    }, toast.time);
  };

  return { addToast };
}
