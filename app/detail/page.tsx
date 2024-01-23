import React, { useRef } from "react";

import DetailHeader from "./DetailHeader/detailHeader";
import DetailContent from "./DetailContent/detailContent";
import { ZoomOutImg } from "@/components/image/image";

export default function DetailPage() {
  return (
    <main>
      <DetailHeader />
      <DetailContent />

      <ZoomOutImg />
    </main>
  );
}
