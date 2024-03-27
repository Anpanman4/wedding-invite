import React from "react";
import "./Fotter.scss";

import PS from "../../../images/PS.svg";
import GoodBye from "../../../images/goodBye.svg";

export const Footer: React.FC = () => {
  return (
    <section className="footer">
      <p className="footer__text">
        <img className="footer__ps" src={PS} alt="Ждем вас" />
        Будем благодарны, если вы замените букеты цветов бутылочкой вина или нашей любимой текилы, а подарки упакуете в
        конверты
      </p>
      <img className="footer__img" src={GoodBye} alt="Ждем вас" />
    </section>
  );
};
