import React from "react";
import "./Place.scss";

import Map from "../../../images/place.svg";
import Majestic from "../../../images/majesticPlace.jpg";

export const Place: React.FC = () => {
  return (
    <section className="place">
      <h2 className="place__title">
        <img className="place__dote" src={Map} alt="Точка" />
        Место проведения
      </h2>
      <p className="place__description">
        Банкетный ресторан Majestic
        <br /> в г. Санкт-Петербург, Репино
        <br />
        по адресу: Приморское шоссе, 428
      </p>
      <img className="place__map" src={Majestic} alt="Точка" />
      <a className="place__link" target="_blank" rel="noreferrer" href="https://yandex.ru/maps/-/CDQyyHLO">
        Смотреть на карте
      </a>
    </section>
  );
};
