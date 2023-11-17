import { atom } from "recoil";

const backImgState = atom({
  key: "backImgState",
  default: "",
});

const waterImgState = atom({
  key: "waterImgState",
  default: "",
});

const waterPosState = atom({
  key: "waterPosState",
  default: "center",
});

export { backImgState, waterImgState, waterPosState };
