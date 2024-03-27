import React from "react";
import "./Main.scss";

import { Plan } from "./Plan/Plan";
import { Place } from "./Place/Place";
import { Dress } from "./Dress/Dress";
import { Form } from "./Form/Form";
import { Footer } from "./Fotter/Fotter";

import DearPeople from "../../images/dearPeople.svg";
import WeAre from "../../images/weAre.jpg";
import Hearth from "../../images/hearth.svg";
import Kiss from "../../images/kiss.svg";
import Hands from "../../images/hands.jpg";

const Main: React.FC = () => {
  return (
    <main className="page">
      <section className="main">
        <img className="main__weAre" src={WeAre} alt="Мы" />
        <img className="main__kiss" src={Kiss} alt="Поцелуй" />
        <img className="main__dear" src={DearPeople} alt="Дорогие близкие и друзья" />
        <h1 className="main__title">8 августа</h1>
        <p className="main__description">
          состоится наша свадьба
          <img className="main__hearth" src={Hearth} alt="Сердечко" />
        </p>
        <p className="main__text">
          Приглашаем вас разделить
          <br />с нами этот особенный день!
        </p>
        <img className="main__hands" src={Hands} alt="Красивые ручки" />
      </section>
      <Place />
      <Plan />
      <Dress />
      <Form />
      <Footer />
    </main>
  );
};

export default Main;
