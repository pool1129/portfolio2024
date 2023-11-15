import { atom } from "recoil";

const backImgState = atom({
  key: "backImgState",
  default: "",
});

const waterImgState = atom({
  key: "waterImgState",
  default: "",
});

export { backImgState, waterImgState };
