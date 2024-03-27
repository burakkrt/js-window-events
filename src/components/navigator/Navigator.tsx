import React from "react";
import { INavigatorProps } from "./types.ts";
import TextCard from "../text-card/TextCard.tsx";

const Navigator: React.FC<INavigatorProps> = () => {
  console.log(navigator);

  const agent = navigator.userAgent;

  return (
    <>
      <TextCard>
        <span className="title">navigator</span>
        <p className="info">
          Komut dosyasını çalıştıran uygulama hakkında yöntemleri ve ozellikleri
          dondurur. Sadece okunabilir.
        </p>
      </TextCard>
      <TextCard>
        <span className="title">navigator.userAgent</span>\
        <span className="px">{agent}</span>
        <p className="info">
          Komut dosyasını çalıştıran uygulama hakkında yöntemleri ve ozellikleri
          dondurur. Sadece okunabilir.
        </p>
      </TextCard>
    </>
  );
};

export default Navigator;
