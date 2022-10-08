//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

//?Harici stillendirme dosyasi
import "./Content.css";

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
import img2 from "../img/spring2.jpg";

const Content = () => {
  //* JS alanı
  const imgStyle = {
    display: "block",
    width: "300px",
    margin: "1rem auto",
  };
  return (
    //* JSX alanı
    <div>
      {/* Inline Style */}
      <h2 style={{ color: "red" }}>React JS</h2>
      <p style={{ backgroundColor: "lightgreen" }}>
        React, Kullanici arabirimi tasarlamak icin kullanilan bir JS
        kütüphanesidir.
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
        alt="img1"
      />
      <img style={imgStyle} src={img2} alt="img2" />
      <p className="par-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quaerat
        exercitationem repellendus, perspiciatis quo beatae magni distinctio
        quis ullam mollitia cupiditate ipsa consectetur asperiores? Illum dolore
        at, quidem nulla consequatur reiciendis cupiditate eius iusto fugit
        omnis dolorum quis odio ut?
      </p>
    </div>
  );
};

export default Content;
