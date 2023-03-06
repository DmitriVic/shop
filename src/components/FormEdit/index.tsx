import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
import cn from "classnames";
// import ArrowIcon from './arrow.svg';

import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { indexProps } from "./index.props";
import { useNavigate } from "react-router-dom";

import { useZustand } from "../../store";
import { editUser, getUserInfo } from "../../Api/Api";
import { checkRefreshToken, getDataLocalStorage } from "../../Api/Auth";
import { useEffect, useState } from "react";

interface IFormInput {
  email: string;
  first_name: string;
  second_name: string;
  last_name: string;
  birthday: number | string;
  phonenumber: number | string;
  zip_code: number | string;
  delivery_address: string;
  place: string;
  avatar: string;
  isd: number | string;
}

//const isAuthActive = useZustand((state:any) => state.isAuthActive)

export const FormEdit = ({}: indexProps): JSX.Element => {
  // const ref = useRef();
  const [itype, setType] = useState("text");
  //console.log(itype);
  //const userInfo = getDataLocalStorage('userInfo')
  const [userInfo, setUserInfo] = useState(getDataLocalStorage('userInfo'))
 
 // console.log(userInfo);
  
  //const [first2, setfirst2] = useState('16.03.2023')
  const isAuthDisActive = useZustand((state: any) => state.isAuthDisActive);

  const navigate = useNavigate();
  const handleExit = (e: any) => {
    e.preventDefault();
    //removeUserNameLocalStorage();
    localStorage.clear();
    isAuthDisActive();
    navigate("/");
  };

  const {
    register,
    handleSubmit,
	 setValue ,
    formState: { errors }, reset 
  } = useForm<IFormInput>({
	defaultValues:{
		
		// email: '',
		// first_name: '',
		// second_name: '',
		// last_name: '',
		// birthday: '',
		// phonenumber: '',
		// zip_code: '',
		// delivery_address: '',
		// place: '',
		// avatar: '',
		// isd: '',
	}
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    if (checkRefreshToken()) {
      isAuthDisActive();
      return navigate("/");
    }
    editUser(data);
  };

  useEffect(() => {

	if (userInfo) {
			console.log(Object.keys(userInfo));
			const data = Object.keys(userInfo)
		const newData =	data.forEach((key:any) => {
				setValue(key, userInfo[key]);
			 });
			 setUserInfo(newData)
	}else {
		getUserInfo()
	}
		//console.log(userInfo);
		
		
	// getUserInfo()
	// .then((res) => {console.log(res)})
  
	 
  }, [userInfo])
  

  //console.log(errors);
  //console.log(errors.phonenumber);
  return (
    <div className={s.container}>
      <form className={s["form-auth"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={s["person-date"]}>
          <div className={s["title"]}>Персональные данные</div>

          <div className={s["person-date__box"]}>
            <div className={s["avatar"]}>
              <img
                className={s["image"]}
                 src="https://stihi.ru/pics/2021/12/11/4214.jpg"
                alt=""
              />
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
                className={cn(s["date-birth"], s["inpt"])}
                //type={first? 'text': 'date'}
                //placeholder={first2}
					 placeholder='введите дату'
                type={itype}
                {...register("birthday", {})}
               //  onFocus={() => setType("date")}
               //  onBlur={() => setType("text")}
              />
            </div>
          </div>

          {/* <input placeholder="Дата рождения" className={cn(s["date-birth"],s["inpt"])} type="text" /> */}
        </div>

        <div className={s["buttons"]}>
          <button type="submit" className={s["btn1"]}>
            Сохранить
          </button>

          <button className={cn(s["btn1"], s["btn-hover"])}>
            Сменить пароль
          </button>

          <button
            onClick={handleExit}
            className={cn(s["btn1"], s["btn-hover"])}
          >
            Выйти
          </button>







			 <div >setvalue</div>









        </div>



        <div className={s["data-communication"]}>
          <div className={s["title"]}>Данные для связи</div>
          <div>
            <div className={s["code-number"]}>
              <input
                className={cn(s["inpt-code"], s["inpt"])}
                type="tel"
                placeholder="Код"
                {...register("isd", {
                  // pattern: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                })}
              />
              <input
                className={s["inpt"]}
                type="tel"
                placeholder="Телефонный номер-10 цифр"
                {...register("phonenumber", {
                  // pattern: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                })}
              />
            </div>
            {errors.phonenumber?.type === "pattern" && (
              <p className={s["errors"]}>Введите корректно номер телефона</p>
            )}

            <label htmlFor="">
              <input
                className={s["inpt"]}
                type="email"
                placeholder="Почта"
                {...register("email", {
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
          <div className={s["delivery-address__inputs"]}>
            <input
              className={s["inpt"]}
              type="number"
              placeholder="Индекс"
              {...register("zip_code", {})}
            />
            <input
              className={s["inpt"]}
              type="text"
              placeholder="Город"
              {...register("place", {})}
            />

            <input
              className={s["inpt"]}
              type="text"
              placeholder="Адрес"
              {...register("delivery_address", {})}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
