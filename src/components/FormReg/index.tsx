 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useForm } from "react-hook-form";
import { indexProps } from "./index.props";

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

export const FormReg = ({setChangeModal}: indexProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }, } = useForm();

  const onSubmit = (data: any) => console.log(data);
  
  console.log(errors);


  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
		<h2>Зарегистрироваться</h2>
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <button>Регистрация</button>
		<div onClick={()=>setChangeModal(a =>!a)}>войти</div>
    </form>
  );
};
