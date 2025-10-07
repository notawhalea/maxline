import React, { useState } from "react";
import styles from "./RegisterForm.module.scss";

export default function RegisterForm() {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [terms, setTerms] = useState<boolean>(true);
  const [bonus, setBonus] = useState<boolean>(true);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isPassError, setIsPassError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);

  const checkValidity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pass.length < 6) {
      setIsPassError(true);
    } else {
      setIsPassError(false);
    }

    if (phone.trim().length < 13) {
      setIsPhoneError(true);
    } else {
      setIsPhoneError(false);
    }

    setIsError(true);
  };

  return (
    <form className={styles.form} onSubmit={checkValidity}>
      <h2 id="reg-title" className={styles.h2}>
        Регистрация
      </h2>
      <label className={styles.field}>
        <span>Номер телефона</span>
        <div
          className={`${styles.inputWrap} ${isPhoneError ? styles.error : ""}`}
        >
          <span className={styles.flag}></span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+375"
          />
        </div>
      </label>
      {isPhoneError && (
        <div className={styles.errorText}>
          Введите корректный номер телефона
        </div>
      )}
      <label className={styles.field}>
        <span>Пароль</span>
        <div
          className={`${styles.inputWrapPass} ${isPassError ? styles.error : ""}`}
        >
          <input
            type={isShowPassword ? "text" : "password"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Придумайте пароль"
          />
          <button
            type="button"
            className={`${styles.drop} ${isShowPassword ? styles.show : ""}`}
            onClick={() => setIsShowPassword(!isShowPassword)}
          />
        </div>
      </label>
      {isPassError && (
        <div className={styles.errorText}>
          Пароль должен содержать минимум 6 символов
        </div>
      )}
      <label className={`${styles.check} ${styles.checkFirst}`}>
        <input
          type="checkbox"
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
        />
        <span className={styles.checkboxIcon}></span>
        <span>
          Мне больше 21 года. <br />Я согласен и принимаю{" "}
          <a href="#">«Правила приёма ставок»</a> и{" "}
          <a href="#">«Политику конфиденциальности»</a>.
        </span>
      </label>
      <label className={styles.check}>
        <input
          type="checkbox"
          checked={bonus}
          onChange={(e) => setBonus(e.target.checked)}
        />
        <span className={styles.checkboxIcon}></span>
        <span>
          Я принимаю участие и согласен с <a href="#">условиями бонуса</a>.
        </span>
      </label>
      <button className={styles.submit} type="submit">
        РЕГИСТРАЦИЯ
      </button>
      {isError && (
        <div className={`${styles.errorText} ${styles.errorTextCenter}`}>
          Пользователь с таким номером телефона уже существует
        </div>
      )}
    </form>
  );
}
