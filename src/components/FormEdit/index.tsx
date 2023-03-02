import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
import cn from "classnames";
// import ArrowIcon from './arrow.svg';

import { SubmitHandler, useForm } from "react-hook-form";
import { indexProps } from "./index.props";
import { useNavigate } from "react-router-dom";

import { useZustand } from "../../store";
import { removeUserNameLocalStorage } from "../../Api/Auth";

interface IFormInput {
  email: string;
  first_name: string;
  second_name: string;
  last_name: string;
  birthday: number;
  phonenumber: number;
  zip_code: number;
  delivery_address: string;
  place: string;
  avatar: string;
}

//const isAuthActive = useZustand((state:any) => state.isAuthActive)

export const FormEdit = ({}: indexProps): JSX.Element => {
  const isAuthDisActive = useZustand((state: any) => state.isAuthDisActive);

  const navigate = useNavigate();
  const handleExit = (e: any) => {
    e.preventDefault();
    removeUserNameLocalStorage();
    isAuthDisActive();
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  //console.log(errors);
  //console.log(errors.phonenumber);
  return (
    <div className={s.container}>
      <form className={s["form-auth"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={s["person-date"]}>
          <div className={s["title"]}>Персональные данные</div>

          <div className={s["person-date__box"]}>
            <div className={s["avatar"]}>
              <img className={s['image']} src="https://r2.mt.ru/u20/photo98BB/20964122176-0/original.gif" alt="" />
            </div>

            <div className={s["initials"]}>
              <label htmlFor="">
                <input
                  id="first_name"
                  className={s["inpt"]}
                  type="text"
                  placeholder="Имя"
                  {...register("first_name", {})}
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
				  		className={cn(s["date-birth"],s["inpt"])}
					  type="date"
                placeholder="dateBirth"
                {...register("birthday", { })}
              />
            </div>
          </div>

          {/* <input placeholder="Дата рождения" className={cn(s["date-birth"],s["inpt"])} type="text" /> */}

          <div className={s["buttons"]}>
            <button type="submit" className={s["btn1"]}>
              Сохранить
            </button>

				<button
            
              className={cn(s["btn1"], s["btn-hover"])}
            >
              Сменить пароль
            </button>

            <button
              onClick={handleExit}
              className={cn(s["btn1"], s["btn-hover"])}
            >
              Выйти
            </button>
          </div>
        </div>

        <div className={s["data-communication"]}>
          <div className={s["title"]}>Данные для связи</div>
          <div>
            <label htmlFor="">
              <input
                className={s["inpt"]}
                type="tel"
                placeholder="Телефонный номер"
                {...register("phonenumber", {
                  pattern: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                })}
              />
              {errors.phonenumber && (
                <p className={s["errors"]}>Введите корректно номер телефона</p>
              )}
            </label>
            <label htmlFor="">
              <input
                className={s["inpt"]}
                type="email"
                placeholder="Почта"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email?.type === "pattern" && (
                <p className={s["errors"]} role="alert">
                  Введите корректный адрес электронной почты
                </p>
              )}
            </label>
          </div>
        </div>

        <div className={s["delivery-address"]}>
          <div className={s["title"]}>Адрес доставки</div>
          <input
            className={s["inpt"]}
            type="number"
            placeholder="Индекс"
            {...register("zip_code", {})}
          />

          <input
            type="text"
            className={s["inpt"]}
            placeholder="Город"
            name=""
            id=""
          />

          <input
            className={s["inpt"]}
            type="text"
            placeholder="Адрес"
            {...register("delivery_address", {})}
          />
        </div>
      </form>
    </div>
  );
};
