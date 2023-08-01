import React from "react";
import successIcon from "../../images/icon-success.svg";
import errorIcon from "../../images/icon-error.svg";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  
  return (
    <div className={`popup popup_type_infotooltip ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_tooltip">
      <button
        type="button"
        className="popup__close popup__close-author"
        aria-label="Закрыть всплывающее окно"
        onClick={onClose}
    />
        <img
          src={isSuccess ? successIcon : errorIcon}
          alt={isSuccess ? "Знак успеха" : "Знак ошибки"}
          className="popup__tooltip-icon"
        />
        <p className="popup__tooltip-text">
          {isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
