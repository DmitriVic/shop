import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { SubmitHandler, useForm } from "react-hook-form";
import { indexProps } from "./index.props";

interface IFormInput {
	email: string
first_name: string
second_name:string
last_name:string
phonenumber:number
zip_code:number
delivery_address:string
 }
 



export const FormEdit = ({}: indexProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  //console.log(errors);
  console.log(errors.phonenumber);
  return (
    <div className={s.container}>
      <form className={s["form-auth"]} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
          <input
            className={s["inpt"]}
            type="email"
            placeholder="Почта"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === "pattern" && (
            <p className={s["errors"]} role="alert">
              Введите корректный адрес электронной почты
            </p>
          )}
        </label>

        <label htmlFor="">
          <input
            className={s["inpt"]}
            type="text"
            placeholder="Имя"
            {...register("first_name", { })}
          />
          
        </label>

        <input
          className={s["inpt"]}
          type="text"
          placeholder="Отчество"
          {...register("second_name", {})}
        />

        <input
          className={s["inpt"]}
          type="text"
          placeholder="Фамилия"
          {...register("last_name", {})}
        />

        <input
          className={s["inpt"]}
          type="tel"
          placeholder="Телефонный номер"
          {...register("phonenumber", { pattern: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/ } )}
        />
				{errors.phonenumber &&  <p className={s["errors"]}>Введите корректно номер телефона</p> }
        <input
          className={s["inpt"]}
          type="number"
          placeholder="Индекс"
          {...register("zip_code", {})}
        />

        <input
          className={s["inpt"]}
          type="text"
          placeholder="Адрес"
          {...register("delivery_address", {})}
        />

        <button className={s["btn1"]}>Сохранить</button>
      </form>
    </div>
  );
};
