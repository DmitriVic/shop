import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useForm } from "react-hook-form";
import { indexProps } from "./index.props";
import { useState } from "react";
import eye from "./img/eye.svg";
import eyeOpen from "./img/eye-open.svg";
import { Link,  useNavigate } from "react-router-dom";
import { registerUser } from "../../Api/Auth";

export const FormReg = ({}: indexProps): JSX.Element => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm();
  const onSubmit = (data: any) => {
    registerUser(data)
      .then((response) => {
        if (response.ok === true) {
          alert("Пользователь успешно зарегистрирован, выполните вход");
          navigate("/authorization");
        }
        return Promise.reject(response);
      })

      .catch((res) => res.json())
      .then((data) => {
        if (
          data.username[0] === "Пользователь с таким именем уже существует."
        ) {
          setError("root.serverError", {
            type: "Пользователь с таким именем уже существует",
          });
        }
      });
  };

  const togglePasswordVisibility = () => {
    console.log(isPasswordVisible);
    setPasswordVisibility((a) => !a);
  };

  return (
    <div className={s.container}>
      <form className={s["form-auth"]} onSubmit={handleSubmit(onSubmit)}>
        <h1>РЕГИСТРАЦИЯ</h1>
        <div className={s.links}>
          <a href="">По номеру телефона</a>
          <a href="">По Email</a>
        </div>
        <label htmlFor="">
          <input
            className={s.inpt}
            type="text"
            placeholder="Имя"
            {...register("username", { required: true, maxLength: 20, pattern: /^\S*$/ })}
            onClick={() => clearErrors()}
          />
          {errors.root?.serverError.type && (
            <p className={s["errors"]}>
              Пользователь с таким именем уже существует
            </p>
          )}

          {errors.username?.type === "required" && (
            <p className={s["errors"]} role="alert">
              Имя обязательно
            </p>
          )}
          {errors.username?.type === "pattern" && (
            <p className={s["errors"]} role="alert">
              Пробелы не допустимы
            </p>
          )}
        </label>

        <label htmlFor="password" className={s.password}>
          <input
            className={s.inpt}
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Пароль"
            {...register("password", { required: true, maxLength: 12 })}
          />
          <span className={s["hidden-pass"]} onClick={togglePasswordVisibility}>
            <img src={isPasswordVisible ? eye : eyeOpen} alt="" className={s.eye} />
          </span>
          {errors.password?.type === "required" && (
            <p className={s["errors"]} role="alert">
              Пароль обязателен
            </p>
          )}
        </label>
        <label htmlFor="">

          <button   className={cn(s['btn1'], { [s.active]: isValid })} type="submit">
            Продолжить
          </button>

          <div className={s.agreement}>
            Нажимая кнопку «Продолжить», Вы соглашаетесь на обработку и передачу
            своих персональных данных в соответствии с положением об обработке и
            защите персональных данных покупателей.
          </div>
        </label>
        <label htmlFor="checkbox" className={s["label-check"]}>
          <input
            type="checkbox"
            placeholder="Checkbox"
            {...register("Checkbox", {})}
            id="checkbox"
            className={s.checkbox}
          />
          <span>
            Я предоставляю свое согласие на получение рекламных рассылок
          </span>
        </label>
        <div>
          <div>Нет аккаунта?</div>
          <Link to={"../authorization"}>
            <button className={s.btn2}>Войти</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
