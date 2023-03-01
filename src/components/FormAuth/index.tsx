import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
import cn from "classnames";
// import ArrowIcon from './arrow.svg';

import { useForm } from "react-hook-form";
import { indexProps } from "./index.props";
import { useState } from "react";
import eye from "./img/eye.svg";
import { Link, useNavigate } from "react-router-dom";
import { authUser } from "../../Api/Auth";
import { putTokenData } from "../../Api/Auth";
import { useZustand } from "../../store";



export const FormAuth = ({}: indexProps): JSX.Element => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
   const isAuthActive = useZustand((state:any) => state.isAuthActive)
  const navigate = useNavigate()

  const {
    register,
    setError,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm();
  const onSubmit = (obj: any) => {
    const ff = async () => {
		try {
			const response = await authUser(obj);
			if (response.status === 401) {
			  setError("root.serverError", {
				 type: "Пользователь с таким именем уже существует",
			  });
			  throw new Error("401");
			}
			 const data = await response.json();
			 console.log(obj.username);
			 putTokenData(data, 'tokenData')
			putTokenData(obj.username, 'userName')
			isAuthActive()
			navigate('/')
		} catch (error) {
			console.log("Ошибка ответа сервера");
			
		}
    };

    ff();

    //sessionStorage.setItem("tokenData", JSON.stringify(res));
  };

  // console.log(errors);

  const togglePasswordVisibility = () => {
    console.log(isPasswordVisible);
    setPasswordVisibility((a) => !a);
  };

  return (
    <div className={s.container}>
      <form className={s["form-auth"]} onSubmit={handleSubmit(onSubmit)}>
        <h1>ВXОД</h1>
        <div className={s.links}>
          <a href="">По номеру телефона</a>
          <a href="">По Email</a>
        </div>

        <label htmlFor="">
          <input
            className={s.inpt}
            type="text"
            placeholder="Имя"
            {...register("username", { required: true, maxLength: 20 })}
          />

          {errors.username?.type === "required" && (
            <p className={s["errors"]} role="alert">
              Имя обязательно
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
            <img src={eye} alt="" className={s.eye} />
          </span>

			 {errors.password?.type === "required" && (
            <p className={s["errors"]} role="alert">
              Пароль обязателен
            </p>
          )}

        </label>
        <label htmlFor="">
          {errors.root?.serverError.type && (
            <p className={s["errors"]}>Неверный логин или пароль</p>
          )}

          <button
            className={cn(s["btn1"], { [s.active]: isValid })}
            type="submit"
          >
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
          <Link to="../registration">
            <button className={s.btn2}>Зарегистрироваться</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
