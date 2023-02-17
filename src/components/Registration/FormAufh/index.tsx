import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useForm } from "react-hook-form";
import { indexProps } from "./index.props";
import { useState } from "react";

// export const Button = ({ appearance, arrow = 'none',  children, className, ...props }: ButtonProps): JSX.Element => {
// 	return (
// 	<button  className={cn(s.button, className, {
// 		[s.primary]: appearance == 'primary',
// 		[s.ghost]: appearance == 'ghost',
// 	})}
// 	{...props}
// 	>
// 		{children}
// 		{arrow != 'none' && <span className={cn(s.arrow, {
// 				[s.down]: arrow == 'down'
// 			})}>
// 				<ArrowIcon />
// 			</span>}

// 	</button>)
// }

export const FormAufh = ({ setChangeModal }: indexProps): JSX.Element => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  console.log(errors);

  //console.log(setChangeModal);
  const togglePasswordVisibility = () => {
	console.log(isPasswordVisible);
	
    setPasswordVisibility(a => !a);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Войти</h2>
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
        <span className={s['hidden-pass']} onClick={togglePasswordVisibility}>показать/скрыть </span>
      </label>

      <button>Отправить</button>
      <div
        onClick={() => setChangeModal((a) => !a)}
        className={s["switch-modal"]}
      >
        Регистрация
      </div>
    </form>
  );
};
