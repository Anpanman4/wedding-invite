import React, { useState } from "react";
import "./Form.scss";

import axios from "axios";

export const Form: React.FC = () => {
  const [names, setNames] = useState("");
  const [presence, setPresence] = useState("");
  const [drink0, setDrink0] = useState(false);
  const [drink1, setDrink1] = useState(false);
  const [drink2, setDrink2] = useState(false);
  const [drink3, setDrink3] = useState(false);
  const [drink4, setDrink4] = useState(false);
  const [drink5, setDrink5] = useState(false);
  const [drink6, setDrink6] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const submitHandler = (people: string, arrive: string, alcohol: string) => {
    if (!people || !arrive || !alcohol) {
      setSuccessMessage("");
      return setIsError(true);
    }
    if (alcohol.at(0) === " ") alcohol = alcohol.slice(1);
    setIsError(false);
    setSuccessMessage("Форма отправляется");
    axios
      .post("https://sheet.best/api/sheets/0194e398-57ee-4e51-800d-9e1efaef20e6", { people, arrive, alcohol })
      .then(response => setSuccessMessage("Форма отправлена"));
  };

  return (
    <section className="form">
      <h2 className="form__title">Подтверждение присутствия</h2>
      <p className="form__text">
        Пожалуйста, заполните анкету до 1 июня. Ответы на данные вопросы очень помогут в создании комфортного для всех
        праздника
      </p>
      <form className="form__container">
        <h3 className="form__label">Фамилия Имя</h3>
        <p className="form__description">
          Если вы будете с семьей или с парой,
          <br />
          то внесите все имена
        </p>
        <input
          className="form__text-input"
          type="text"
          placeholder="Иванов Иван и Бобик"
          value={names}
          onChange={e => setNames(e.target.value)}
        />
        <h3 className="form__label">Присутствие</h3>
        <label className="form__presence" onClick={() => setPresence("Приедем")}>
          <input type="radio" name="presence" />
          <span>Мы придем (Я приду)</span>
        </label>
        <label className="form__presence" onClick={() => setPresence("Отвечу позже")}>
          <input type="radio" name="presence" />
          <span>Скажем (скажу) ответ позже</span>
        </label>
        <label className="form__presence" onClick={() => setPresence("Не приеду")}>
          <input type="radio" name="presence" />
          <span>Прийти не получится</span>
        </label>
        <h3 className="form__label">Предпочтения по напиткам</h3>
        <p className="form__description">для выбора нажмите на вариант</p>
        <p className={`form__drinks ${drink0 ? "form__drinks--long" : ""}`} onClick={() => setDrink0(!drink0)}>
          Красное вино
        </p>
        <p className={`form__drinks ${drink1 ? "form__drinks--long" : ""}`} onClick={() => setDrink1(!drink1)}>
          Белое вино
        </p>
        <p className={`form__drinks ${drink2 ? "form__drinks--long" : ""}`} onClick={() => setDrink2(!drink2)}>
          Шампанское
        </p>
        <p className={`form__drinks ${drink3 ? "form__drinks--short" : ""}`} onClick={() => setDrink3(!drink3)}>
          Водка
        </p>
        <p className={`form__drinks ${drink4 ? "form__drinks--short" : ""}`} onClick={() => setDrink4(!drink4)}>
          Виски
        </p>
        <p className={`form__drinks ${drink5 ? "form__drinks--short" : ""}`} onClick={() => setDrink5(!drink5)}>
          Джин
        </p>
        <p className={`form__drinks ${drink6 ? "form__drinks--short" : ""}`} onClick={() => setDrink6(!drink6)}>
          Не пью
        </p>
        {isError && <p className="form__error-message">Заполните, пожалуйста, все поля анкеты!</p>}
      </form>
      <button
        type="button"
        className="form__button"
        onClick={() => {
          submitHandler(
            names,
            presence,
            `${drink0 ? "Красное вино" : ""}${drink1 ? " Белое вино" : ""}${drink2 ? " Шампанское" : ""}${
              drink3 ? "Водка" : ""
            }${drink4 ? " Виски" : ""}${drink5 ? " Джин" : ""}${drink6 ? " Не пью" : ""}`
          );
        }}
      >
        Отправить
      </button>
      {successMessage && <p className="form__success-message">{successMessage}</p>}
      <p className="form__description form__description--bottom">
        В случае возникновения вопросов в день торжества, обращайтесь к нашему свадебному координатору
        <span style={{ fontWeight: "700" }}>
          <br />
          Тане +7 (913)-068-48-79
        </span>
      </p>
    </section>
  );
};
