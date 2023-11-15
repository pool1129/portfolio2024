import { backImgState, waterImgState } from "@/stores/mark/store";
import { useRecoilState, useSetRecoilState } from "recoil";

export function useMark() {
  const setBackImg = useSetRecoilState(backImgState);
  const setWaterImg = useSetRecoilState(waterImgState);

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

  return { encodeFileToBase64, fileHandler };
}
