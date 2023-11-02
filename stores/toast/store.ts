import { atom, selector } from "recoil";

type ToastType = {
  id: number;
  title: string;
  desc: string;
  time: number;
  icon: "success" | "warning" | "error";
};

const toastListState = atom<ToastType[]>({
  key: "toastListState",
  default: [],
});

const filterToastListState = selector({
  key: "FilteredToastList",
  get: ({ get }) => {
    const list = get(toastListState);

    console.log(list);
    return list.filter((item) => item);
  },
});

export { toastListState, filterToastListState };
export type { ToastType };
