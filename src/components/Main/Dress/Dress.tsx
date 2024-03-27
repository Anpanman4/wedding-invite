import React from "react";
import "./Dress.scss";

import Dresses from "../../../images/outfit.svg";
import Peoples from "../../../images/peoples.png";
import PeoplesMini from "../../../images/peoplesMini.png";

export const Dress: React.FC = () => {
  return (
    <section className="dress">
      <img className="dress__dresses" src={Dresses} alt="Платья" />
      <h2 className="dress__title">Дресс-код</h2>
      <p className="dress__text">
        Мы будем признательны, если вы поможете создать особую атмосферу и присоединитесь к нашему дресс-коду
      </p>
      <p className="dress__description" onClick={() => console.log(window.innerWidth)}>
        Тематика нашего мероприятия подразумевает торжественные, праздничные{" "}
        <span style={{ fontWeight: "700" }}>наряды в светлых оттенках</span> (бежевый, белый, серый, теплые пастельные
        цвета) <span style={{ fontWeight: "700" }}>с красным акцентом</span> (красная помада, украшения, туфли/сумка,
        небольшой элемент одежды)
      </p>
      {window.innerWidth > 800 ? (
        <img className="dress__peoples" src={Peoples} alt="Люди" />
      ) : (
        <img className="dress__peoples" src={PeoplesMini} alt="Люди" />
      )}
      <p className="dress__text dress__text--bottom">
        Просим вас воздержаться от броских принтов и полностью ярких образов ♡<br />
        Для удобства мы также собрали{" "}
        <a style={{ color: "#BC0F0B" }} target="_blank" rel="noreferrer" href="https://pin.it/1yKdby2BE">
          доску на Pinterest
        </a>
        , чтобы вам было проще подобрать наряд
      </p>
    </section>
  );
};
