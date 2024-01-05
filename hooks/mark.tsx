import {
  backImgState,
  waterImgState,
  waterPosState,
} from "@/stores/mark/store";
import { useRecoilValue, useRecoilState } from "recoil";

export function useMark() {
  const [backImg, setBackImg] = useRecoilState(backImgState);
  const [waterImg, setWaterImg] = useRecoilState(waterImgState);
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
      target.id == "back"
        ? setBackImg({ ...backImg, img: data })
        : setWaterImg({ ...waterImg, img: data });
    });

    alert("업로드 되었습니다.");
  };

  const sizeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = target.value;

    if (value === undefined || value === null) {
      return;
    }

    if (target.id.includes("back")) {
      target.id.includes("width")
        ? setBackImg({ ...backImg, width: value >= "1024" ? "1024" : value })
        : setBackImg({ ...backImg, height: value >= "1024" ? "1024" : value });
    } else {
      target.id.includes("width")
        ? setWaterImg({ ...waterImg, width: value >= "1024" ? "1024" : value })
        : setWaterImg({
            ...waterImg,
            height: value >= "1024" ? "1024" : value,
          });
    }
  };

  const setPosition = (backSize: any, waterSize: any) => {
    let xPos, yPos;

    if (waterPos == "center") {
      xPos = (backSize.width - waterSize.width) / 2;
      yPos = (backSize.height - waterSize.height) / 2;
    } else if (waterPos == "leftBtm") {
      xPos = 20;
      yPos = backSize.height - waterSize.height - 20;
    } else if (waterPos == "leftTop") {
      xPos = 20;
      yPos = 20;
    } else if (waterPos == "rightBtm") {
      xPos = backSize.width - waterSize.width - 20;
      yPos = backSize.height - waterSize.height - 20;
    } else {
      xPos = backSize.width - waterSize.width - 20;
      yPos = 20;
    }

    return { xPos, yPos };
  };

  return { encodeFileToBase64, fileHandler, setPosition, sizeHandler };
}
