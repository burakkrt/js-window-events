import React, { useEffect, useState } from "react";
import { IWindowHeightProps } from "./types.ts";
import * as Styled from "./WindowHeight-styled";

const WindowHeight: React.FC<IWindowHeightProps> = () => {
  const [innnerHeight, setInnerHeight] = useState<number>(0);
  const [outHeight, setOutHeight] = useState<number>(0);

  useEffect(() => {
    const resize = () => {
      window.addEventListener("resize", (e: any) => {
        const window = e.target;
        setInnerHeight(window.innerHeight);
        setOutHeight(window.outerHeight);
      });
    };

    resize();
    setInnerHeight(window.innerHeight);
    setOutHeight(window.outerHeight);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Styled.WindowHeightLayout>
      <Styled.TextCard>
        <span className="title">window.innerHeight</span>
        <span className="sub-title">Pencere İç Yüksekliği :</span>
        <span className="px">{innnerHeight}px</span>
        <p className="info">
          Yatay kaydırma çubuğunun yüksekliği de dahil olmak üzere pencerenin iç
          yüksekliğini piksel cinsinden döndürür.
        </p>
      </Styled.TextCard>
      <Styled.TextCard>
        <span className="title">window.outerHeight</span>
        <span className="sub-title">Pencere Dış Yüksekliği :</span>
        <span className="px">{outHeight}px</span>
        <p className="info">
          Pencere kromu ve pencere boyutlandırma kenarlıkları/ tutamaçları dahil
          olmak üzere tüm tarayıcı penceresinin piksel cinsinden yüksekliğini
          döndürür.
        </p>
      </Styled.TextCard>
    </Styled.WindowHeightLayout>
  );
};

export default WindowHeight;
