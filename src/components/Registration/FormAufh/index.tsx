import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useForm } from "react-hook-form";
import { indexProps } from "./index.props";
import { useState } from "react";

export const FormAufh = ({}: indexProps): JSX.Element => {
  const [arrText, setArrText] = useState(["Войти", "Создать акаунт"]);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //const onSubmit = (data: any) => console.log(data);
  const onSubmit = (data: any) => {
    if (arrText[0] === "Войти") {
      console.log(` "Данные для входа"`);
    } else {
      console.log(` "Данные для регистрации"`);
    }
  };

  //console.log(errors);

  function handleChangeModal() {
    if (arrText[0] === "Войти") {
      setArrText(["Создать акаунт", "Войти"]);
    } else {
      setArrText(["Войти", "Создать акаунт"]);
    }
  }
  const togglePasswordVisibility = () => {
    console.log(isPasswordVisible);
    setPasswordVisibility((a) => !a);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>{arrText[0]}</h2>
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />

      <label htmlFor="">
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Password"
          {...register("Password", { required: true, maxLength: 12 })}
        />
        <span className={s["hidden-pass"]} onClick={togglePasswordVisibility}>
          показать/скрыть{" "}
        </span>
      </label>

      <button>Отправить</button>
      <div onClick={handleChangeModal} className={s["switch-modal"]}>
        {arrText[1]}
      </div>
    </form>
  );
};
