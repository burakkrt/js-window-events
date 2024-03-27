import React from "react";
import { INavigatorProps } from "./types.ts";
import TextCard from "../text-card/TextCard.tsx";
import { Note } from "../global-styled.tsx";

const Navigator: React.FC<INavigatorProps> = () => {
  const { userAgent } = navigator;

  function getBrowserName() {
    // The order matters here, and this may report false positives for unlisted browsers.

    if (userAgent.includes("Firefox")) {
      // "Mozilla/5.0 (X11; Linux i686; rv:104.0) Gecko/20100101 Firefox/104.0"
      return "Mozilla Firefox";
    } else if (userAgent.includes("SamsungBrowser")) {
      // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36"
      return "Samsung Internet";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
      // "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 OPR/90.0.4480.54"
      return "Opera";
    } else if (userAgent.includes("Edge")) {
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) A ppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
      return "Microsoft Edge (Legacy)";
    } else if (userAgent.includes("Edg")) {
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 Edg/104.0.1293.70"
      return "Microsoft Edge (Chromium)";
    } else if (userAgent.includes("Chrome")) {
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
      return "Google Chrome or Chromium";
    } else if (userAgent.includes("Safari")) {
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
      return "Apple Safari";
    } else {
      return "unknown";
    }
  }
  return (
    <>
      <TextCard>
        <span className="title">navigator</span>
        <p className="info">
          Komut dosyasını çalıştıran uygulama hakkında yöntemleri ve ozellikleri
          listeler. Sadece okunabilir. Tarıyıcı bilgileri, işletim sistemi
          bilgileri, arama motoru bilgileri, versiyonlar, tarayıcı dili vb.
        </p>
      </TextCard>
      <TextCard>
        <span className="title">navigator.userAgent</span>\
        <span className="px">{navigator.userAgent}</span>
        <span className="px" style={{ display: "block", margin: "8px 0" }}>
          Mevcut Tarayıcı Bilgisi : {getBrowserName()}
        </span>
        <p className="info">
          navigator.userAgent.includes("...") ile gonderilen string deger eğer
          metnin içerisinde bulunuyor ise geriye bir değer döndüren bir mapping
          fonksiyon hazırlayabiliriz.
        </p>
        <Note type="info">{`Ornek : if (userAgent.includes("Firefox")) { return "Mozilla" }`}</Note>
      </TextCard>
      <TextCard>
        <span className="title">navigator.language</span>\
        <span className="px">{navigator.language}</span>
        <span className="px" style={{ display: "block", margin: "8px 0" }}>
          Mevcut Tarayıcı Dil Bilgisi : {navigator.languages}
        </span>
        <span className="px" style={{ display: "block", margin: "8px 0" }}>
          Tarayıcının kullanabileceği diller :{" "}
          <pre>{JSON.stringify(navigator.languages, undefined, 2)}</pre>
        </span>
        <p className="info">
          Tarayıcının kullanıcı dil seçimini gösteren bir ülke short kodu
          döndürür.
        </p>
      </TextCard>
    </>
  );
};

export default Navigator;
