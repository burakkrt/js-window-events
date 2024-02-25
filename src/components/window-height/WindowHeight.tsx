import React, { useEffect, useState } from "react";
import { IWindowHeightProps } from "./types.ts";
import * as Styled from "./WindowHeight-styled";

const WindowHeight: React.FC<IWindowHeightProps> = () => {
  const [innnerHeight, setInnerHeight] = useState<number>(0);
  const [outHeight, setOutHeight] = useState<number>(0);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [outWidth, setOutWidth] = useState<number>(0);

  useEffect(() => {
    const resize = () => {
      window.addEventListener("resize", (e: any) => {
        const window: Window = e.target;
        setInnerHeight(window.innerHeight);
        setOutHeight(window.outerHeight);
        setInnerWidth(window.innerWidth);
        setOutWidth(window.outerWidth);
      });
    };

    resize();
    setInnerHeight(window.innerHeight);
    setOutHeight(window.outerHeight);
    setInnerWidth(window.innerWidth);
    setOutWidth(window.outerWidth);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
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
      <Styled.TextCard>
        <span className="title">window.innerWidth</span>
        <span className="sub-title">Pencere İç Genişliği :</span>
        <span className="px">{innerWidth}px</span>
        <p className="info">
          Pencerenin iç genişliğini piksel cinsinden döndürür (yani, pencerenin
          düzen görünüm alanının genişliği). Bu, varsa dikey kaydırma çubuğunun
          genişliğini de içerir.
        </p>
      </Styled.TextCard>
      <Styled.TextCard>
        <span className="title">window.outherWidth</span>
        <span className="sub-title">Pencere Dış Genişliği :</span>
        <span className="px">{outWidth}px</span>
        <p className="info">
          Tarayıcı penceresinin dış kısmının genişliğini döndürür. Kenar çubuğu
          (genişletilmişse), pencere kromu ve pencere yeniden boyutlandırma
          kenarlıkları / tutamaçları dahil olmak üzere tüm tarayıcı penceresinin
          genişliğini temsil eder.
        </p>
      </Styled.TextCard>
    </>
  );
};

export default WindowHeight;
