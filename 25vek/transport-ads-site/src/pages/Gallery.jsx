import React, { useState } from "react";
import "./Gallery.css";

import mg1 from "../assets/gallery1.jpg";
import mg2 from "../assets/gallery2.jpg";
import mg3 from "../assets/gallery3.jpg";
import mg4 from "../assets/gallery4.jpg";
import mg5 from "../assets/gallery5.jpg";
import mg6 from "../assets/gallery6.jpg";

function Gallery({ language }) {
  const [selected, setSelected] = useState(null);

  const images = [mg1, mg2, mg3, mg4, mg5, mg6];

  return (
    <section className="gallery">

      <h1>
        {language === "ru" ? "Фотогалерея" : "Фотогалерея"}
      </h1>

      <p className="subtitle">
        {language === "ru"
          ? "Примеры размещения рекламы"
          : "Приклади розміщення реклами"}
      </p>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt="" onClick={() => setSelected(img)} />
          </div>
        ))}
      </div>
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <img src={selected} alt="preview" />
        </div>
      )}

    </section>
  );
}

export default Gallery;