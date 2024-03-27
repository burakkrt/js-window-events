import React from "react";
import { IWindowLocationProps } from "./types.ts";
import TextCard from "../text-card/TextCard.tsx";
import { Note } from "../global-styled.tsx";
const WindowLocation: React.FC<IWindowLocationProps> = () => {
  const location = window.location;

  return (
    <>
      <TextCard>
        <span className="title">window.location</span>
        <span className="px">
          <pre>{JSON.stringify(location, undefined, 2)}</pre>
        </span>
        <p className="info">
          Belgenin geçerli konumu hakkında bilgi içeren bir Location nesnesi
          döndürür. href: mevcut sayfanın url 'ini, origin: kök url örn:
          "https://google.com", pathname: örn google.com/search 'de ki "search"
          path ini vb. bilgileri içerir.
        </p>
      </TextCard>
      <TextCard>
        <span className="title">window.location.replace(string)</span>
        <p className="info">
          Url 'i belirtilen adrese yönlendirir. Örn.
          window.location.replace("https://google.com"). Sayfa yeniden
          yüklendiğiden window.location.replace() komutu tekrar çalışacağı için{" "}
          <Note type="danger">sonsuz döngüye</Note> girer. Kontrollü bir şekilde
          yapılmalıdır.
        </p>
      </TextCard>
      <TextCard>
        <span className="title">window.location.search</span>
        <p className="info">
          Mevcut url 'e sorgu parametresi ekleterek, sunucuya istekte bulunur.
          Örn. window.location.search("userId=5") url'e{" "}
          <Note type="info">{location.origin}/ ?userId=5</Note> şeklinde istekte
          bulunur. Eğer bir cevap dönmez ise sayfa yenilenir.
        </p>
      </TextCard>
      <TextCard>
        <span className="title">window.location.pathname</span>
        <p className="info">
          Örn. {location.origin}/<Note type="success">products</Note> url 'inin
          pathname 'i olan /products 'ü verir.
        </p>
      </TextCard>
    </>
  );
};

export default WindowLocation;
