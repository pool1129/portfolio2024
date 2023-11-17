import {
  backImgState,
  waterImgState,
  waterPosState,
} from "@/stores/mark/store";
import { useRecoilValue, useSetRecoilState } from "recoil";

export function useMark() {
  const setBackImg = useSetRecoilState(backImgState);
  const setWaterImg = useSetRecoilState(waterImgState);
  const waterPos = useRecoilValue(waterPosState);

  const encodeFileToBase64 = (files: File) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();

      reader.readAsDataURL(files);
      reader.onload = (e: any) => res(e.currentTarget.result);
    });
  };

  const fileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = target.files;

    if (files === undefined || files === null) {
      return;
    }

    encodeFileToBase64(files[0]).then((data: any) => {
      target.id == "back" ? setBackImg(data) : setWaterImg(data);
    });
  };

  const setPosition = (
    backImg: HTMLImageElement,
    waterImg: HTMLImageElement
  ) => {
    let xPos, yPos;

    if (waterPos == "center") {
      xPos = (backImg.width / 2 - waterImg.width / 4) / 2;
      yPos = (backImg.height / 2 - waterImg.height / 4) / 2;
    } else if (waterPos == "leftBtm") {
      xPos = 20;
      yPos = backImg.height / 2 - waterImg.height / 4 - 20;
    } else if (waterPos == "leftTop") {
      xPos = 20;
      yPos = 20;
    } else if (waterPos == "rightBtm") {
      xPos = backImg.width / 2 - waterImg.width / 4 - 20;
      yPos = backImg.height / 2 - waterImg.height / 4 - 20;
    } else {
      xPos = backImg.width / 2 - waterImg.width / 4 - 20;
      yPos = 20;
    }

    return { xPos, yPos };
  };

  return { encodeFileToBase64, fileHandler, setPosition };
}
