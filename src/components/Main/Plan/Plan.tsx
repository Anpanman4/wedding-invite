import React from "react";
import "./Plan.scss";

import Stick from "../../../images/stick.svg";
import Glasses from "../../../images/glasses.svg";
import Camera from "../../../images/camera.svg";

export const Plan: React.FC = () => {
  return (
    <section className="plan">
      <img className="plan__glasses" src={Glasses} alt="Точка" />
      <h2 className="plan__title">План на вечер</h2>
      <ul className="plan__items">
        <li className="plan__item">
          <span className="plan__time">16:30</span>
          <img src={Stick} alt="Точка" />
          сбор гостей, фуршет
        </li>
        <li className="plan__item">
          <span className="plan__time">17:00</span>
          <img src={Stick} alt="Точка" />
          начало церемонии
        </li>
        <li className="plan__item">
          <span className="plan__time">18:00</span>
          <img src={Stick} alt="Точка" />
          банкет
        </li>
        <li className="plan__item">
          <span className="plan__time">19:00</span>
          <img src={Stick} alt="Точка" />
          вечеринка
        </li>
        <li className="plan__item">
          <span className="plan__time">23:00</span>
          <img src={Stick} alt="Точка" />
          финал мероприятия
        </li>
      </ul>
      <img className="plan__camera" src={Camera} alt="Точка" />
    </section>
  );
};
