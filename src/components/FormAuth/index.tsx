import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useForm } from "react-hook-form";
import { indexProps } from "./index.props";
import { useState } from "react";
import eye from "./img/eye.svg";
import { Link } from "react-router-dom";

export const FormAuth = ({}: indexProps): JSX.Element => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

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
        <input
          className={s.inpt}
          type="text"
          placeholder="Имя"
          {...register("name", { required: true, maxLength: 80 })}
        />
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
        </label>
        <label htmlFor="">
          <button className={s.btn1} type="submit">Продолжить</button>
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
			<Link to='../registration'><button className={s.btn2}>Зарегистрироваться</button></Link>
			
		</div>
      </form>
      
    </div>
  );
};
