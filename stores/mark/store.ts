import { atom } from "recoil";

const backImgState = atom({
  key: "backImgState",
  default: {
    img: "",
    width: "1024",
    height: "1024",
  },
});

const waterImgState = atom({
  key: "waterImgState",
  default: {
    img: "",
    width: "100",
    height: "100",
  },
});

const waterPosState = atom({
  key: "waterPosState",
  default: "center",
});

const waterOpacityState = atom({
  key: "waterOpacityState",
  default: 0,
});

export { backImgState, waterImgState, waterPosState, waterOpacityState };
