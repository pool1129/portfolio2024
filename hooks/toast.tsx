import { ToastType, toastListState } from "@/stores/toast/store";
import { useRecoilState } from "recoil";

let id = 0;
function createId() {
  return id++;
}

export function useToast() {
  const [toastList, setToastList] = useRecoilState(toastListState);

  const addToast = (toast: ToastType) => {
    const toastId = createId();

    setToastList((oldList) => [
      ...oldList,
      {
        id: toastId,
        title: toast.title,
        desc: toast.desc,
        time: toast.time,
        icon: toast.icon,
        isLoad: true,
      },
    ]);

    setTimeout(() => {
      delToast(toastId);
    }, toast.time);
  };

  const delToast = (toastId: number) => {
    let newList = toastList.filter((data) => data.id != toastId);

    setToastList(newList);
  };

  return { addToast };
}
