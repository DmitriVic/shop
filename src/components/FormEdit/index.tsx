import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useForm } from "react-hook-form";
import { indexProps } from "./index.props";
import { useState } from "react";
import eye from "./img/eye.svg";
import { Link } from "react-router-dom";

export const FormEdit = ({}: indexProps): JSX.Element => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data:any) => console.log(data);
	console.log(errors);
  return (
    <div className={s.container}>
		 <form className={s['form-auth']} onSubmit={handleSubmit(onSubmit)}>
      <input className={s['inpt']} type="text" placeholder="Ник" {...register("Ник", {})} />
      <input className={s['inpt']} type="email" placeholder="Почта" {...register("Почта", {})} />
      <input className={s['inpt']} type="text" placeholder="Имя" {...register("Имя", {})} />
      <input className={s['inpt']} type="text" placeholder="Отчество" {...register("Отчество", {})} />
      <input className={s['inpt']} type="text" placeholder="Фамилия" {...register("Фамилия", {})} />
      <input className={s['inpt']} type="tel" placeholder="Телефонный номер" {...register("Телефонный номер", {})} />
      <input className={s['inpt']} type="number" placeholder="Индекс" {...register("Индекс", {})} />
      <input className={s['inpt']} type="text" placeholder="Адрес" {...register("Адрес", {})} />

      <button className={s['btn1']}>Сохранить</button>
    </form>
      
    </div>
  );
};
