import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
import cn from "classnames";
// import ArrowIcon from './arrow.svg';

import { SubmitHandler, useForm } from "react-hook-form";
import { indexProps } from "./index.props";
import { useNavigate } from "react-router-dom";


import { useZustand } from "../../store";
import { editUser, getUserInfo, uploadAvatar } from "../../Api/Api";
import {
  addTimeToken,
  checkAccessToken,
  checkRefreshToken,
  getDataLocalStorage,
  refreshToken,
} from "../../Api/Auth";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import pencil from './img/pencil.svg'

interface IFormInput {
  email: string;
  first_name: string;
  second_name: string;
  last_name: string;
  birthday?: string | null;
  phonenumber: number | string;
  zip_code: number | string;
  delivery_address: string;
  place: string;
  avatar: FileList | null;
  isd: number | string;
  profilePicture: any;
}

const objInputForm = { email: true, first_name: true, second_name: true, last_name: true, birthday: true, phonenumber:true, zip_code: true, delivery_address: true, place: true, avatar: true, isd: true, file: true, }

export const FormEdit = ({}: indexProps): JSX.Element => {
const [inputForm, setInputForm] = useState<any>(objInputForm)
  const [itype, setType] = useState<string>("text");
  const isAuthDisActive = useZustand((state: any) => state.isAuthDisActive);
  const navigate = useNavigate();
  const [storage, setStorage] = useLocalStorage([], "tokenData");
  const [first, setfirst] = useState<boolean>(true)

  

  

  const addDefaultValue = (arg: any) => {
	const data = Object.keys(arg);
	data.forEach((key: any) => {
	  setValue(key, arg[key]);
	});
 };
  const handleExit = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    isAuthDisActive();
    navigate("/");
  };
  const handleEditDisableClick = (inputName:any) => {
	let variable = inputForm[inputName]
	if (inputForm[inputName] === true) {
		variable = false
	} else {
		variable = true
	}
	setInputForm((prevState:any) => ({
	  ...prevState,
	  [inputName]: variable ,
	}))
 }

  const {
    register,
    handleSubmit,
	 watch,
    setValue,
    formState: { errors, isDirty,  },
  } = useForm<IFormInput>({
   mode: "onChange",
	//  defaultValues: {
   //    isd: 7,
	// 	second_name: 'Дрон'
   //  },
  });
 

  
  
 

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
	// console.log(data);
	
    data.email = data.email.toLocaleLowerCase();
	 
    if (data.birthday === "") {
      data.birthday = null;
    }

    if (checkAccessToken()) {
      const res = await refreshToken(storage.refresh);
      addTimeToken(res);
      setStorage((prevState: any) => ({ ...prevState, ...res }));
      return editUser(storage.username, res.access, data);
    }

    if (checkRefreshToken()) {
      isAuthDisActive();
      return navigate("/");
    }

   const res = await editUser(storage.username, storage.access, data)
	const userData = await res.data
	
	setStorage((prevState: any) => ({ ...prevState, userData }));
  };
  



  useEffect(() => {

	if (checkRefreshToken()) {
      isAuthDisActive();
      return navigate("/");
    }

    if (storage.userData) {
      addDefaultValue(storage.userData);
    } else {
      f();
    }

    async function f() {
      if (checkAccessToken()) {
        const tokenData = await refreshToken(storage.refresh);
        setStorage((prevState: any) => ({ ...prevState, ...tokenData }));
        const userData = await getUserInfo(storage.username, tokenData.access);
        addDefaultValue(userData);
        setStorage((prevState: any) => ({ ...prevState, userData }));
        return userData;
      }

      const userData = await getUserInfo(storage.username, storage.access);
      addDefaultValue(userData);
      setStorage((prevState: any) => ({ ...prevState, userData }));
    }
  }, []);
  
  const  handleFileChange  = async (event: React.ChangeEvent<HTMLInputElement>) => {

	//  if (checkAccessToken()) {
	// 	refreshToken(storage.refresh)
	// 	.then((res) => {console.log(res)})
	// }
	if (checkAccessToken()) {
      const res = await refreshToken(storage.refresh);
		console.log(res);
		
      addTimeToken(res);
      setStorage((prevState: any) => ({ ...prevState, ...res }));
     
    }
	if (event.target.files && event.target.files.length > 0) {
		const file = event.target.files[0];
		 const formData = new FormData
		 formData.append('avatar', file)
	//   
	//   const reader = new FileReader();
	//   reader.readAsDataURL(file);
	//   reader.onload = () => {
	// 	setValue("avatar", event.target.files as FileList); // устанавливаем значение для поля "avatar"
	// 	 setInputForm((prevInputForm: any) => ({
	// 		...prevInputForm,
	// 		profilePicture: reader.result, // превью изображения
	// 	 }));
	//   };
	//   console.log(formData);
	//   console.log(storage.access);
	 // console.log(storage.access);
	  
	  await uploadAvatar(storage.username, storage.access, formData)
	  .then((res) => {
		const userData = {...storage.userData, ...res.data.avatar}
			console.log(userData);
			setStorage((prevState: any) => ({ ...prevState, ...userData }))
		})
	
	 
	  
	  //setStorage((prevState: any) => ({ ...prevState, ...res.data }))
	}
	//console.log(storage)
	 setfirst(elem => !elem)
	// console.log(first)
	// console.log('загрузка');
	
	
	//console.log(getDataLocalStorage('tokenData').username);
	
	
	
};



  return (
    <div className={s.container}>
      <form className={s["form-auth"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={s["person-date"]}>
          <div className={s["title"]}>Персональные данные</div>

          <div className={s["person-date__box"]}>
            <div className={s["avatar"]} >
              
					{/* <img
					  className={s["image"]}
					  src="https://stihi.ru/pics/2021/12/11/4214.jpg"
					  alt=""
					/> */}
					 <div>
          <label className={s["avatar-label"]}>
            Загрузить аватар
            <div  className={s['avatar-wrapper']}>
					<img className={s["avatar-img"]} src={storage && storage.userData ? storage.userData.avatar : ""} alt="" />
					<input
							// disabled={inputForm.avatar}
					  className={s["avatar-input"]}
					  type="file"
					  accept=".jpg, .png, .jpeg"
					  {...register("avatar")}
									  onChange={(e) => {
										handleFileChange(e);
										register("avatar");
									 }}
					/>
					
				</div>
          </label>
          
        </div>
				
	
				  
		
            </div>

				<div>
 

</div>















            <div className={s["initials"]}>

              <label className={s['label']} htmlFor="first_name">
                <input
					 	disabled={inputForm.first_name}
                  id="first_name"
                  className={s["inpt"]}
                  type="text"
                  placeholder="Имя"
                  {...register("first_name", {})}
                />
					 <img src={pencil} onClick={() => (handleEditDisableClick('second_name'))}/>
					 </label>


              <label htmlFor="second_name" className={s['label']}>
					<input
					disabled={inputForm.second_name}
					
					  className={s["inpt"]}
					  type="text"
					  placeholder="Отчество"
					  {...register("second_name", {})}
					/>
					<img src={pencil} onClick={() => (handleEditDisableClick('second_name'))}/>
				  </label>













              <label htmlFor="last_name" className={s['label']}>
					<input
					disabled={inputForm.last_name}
					  className={s["inpt"]}
					  type="text"
					  placeholder="Фамилия"
					  {...register("last_name", {})}
					/>
					<img src={pencil} onClick={() => (handleEditDisableClick('last_name'))}/>
			  </label>





			  
			  <label htmlFor="date-birth" className={s['label']}>
              <input
				  
                className={cn(s["date-birth"], s["inpt"])}
                //type={first? 'text': 'date'}
                //placeholder={first2}
                placeholder="введите дату"
                type={itype}
                //type='date'
                {...register("birthday", {})}
                onFocus={() => setType("date")}
                onBlur={() => setType("text")}
					 disabled={inputForm.birthday}
					 
              />
				  <img src={pencil} onClick={() => (handleEditDisableClick('birthday'))}/>
				  </label>


            </div>
          </div>

          {/* <input placeholder="Дата рождения" className={cn(s["date-birth"],s["inpt"])} type="text" /> */}
        </div>

        <div className={s["buttons"]}>
          <button type="submit" className={cn(s["btn1"], s["btn-hover"])}>
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
        </div>

        <div className={s["data-communication"]}>
          <div className={s["title"]}>Данные для связи</div>
          <div>
            <div className={s["code-number"]}>









				<label htmlFor="inpt-code" className={s['label']}>
              <input
					defaultValue={watch("isd")}
                className={cn(s["inpt-code"], s["inpt"])}
                type="tel"
               // placeholder="Код"
                {...register('isd', ) }
              />
				  {/* <img src={pencil} onClick={() => (handleEditDisableClick('inpt-code'))}/> */}
				  </label>
				 



				  <label htmlFor="phonenumber" className={s['label']}>
              <input
                className={s["inpt"]}
                type="tel"
                placeholder="Телефонный номер-10 цифр"
                {...register("phonenumber", {
                  // pattern: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                })}
              />
				  <img src={pencil} onClick={() => (handleEditDisableClick('phonenumber'))}/>
				  </label>
            </div>

            {errors.phonenumber?.type === "pattern" && (
              <p className={s["errors"]}>Введите корректно номер телефона</p>
            )}

<label htmlFor="email" className={s['label']}>
              <input
                className={s["inpt"]}
                type="email"
                placeholder="Почта"
                {...register("email", {
                  pattern: /^\S+@\S+$/i,
                })}
              />
				  <img src={pencil} onClick={() => (handleEditDisableClick('email'))}/>
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

//const refrToken = getDataLocalStorage('tokenData').refresh

// Object.keys(data).forEach(() => {
// 	if (data['birthday'] === '') {
// 	  delete data['birthday']
// 	}})
// 	console.log(data);

// 	const userInfo = getDataLocalStorage("userInfo");
//   const user = getDataLocalStorage("tokenData").username
//   const accessToken = getDataLocalStorage("tokenData").access;

//setIsEdit((prevState:any) => ({...prevState, ...res} ) )

// const userInfo = getDataLocalStorage('userInfo')
// const data = Object.keys(userInfo)
// data.forEach((key:any) => {
// 		setValue(key, userInfo[key]);
// 	 });
// 	 //setStateUserInfo((e) => (!e))
// 	 console.log('иначе userInfo');
// if (userInfo) {
// 		const data = Object.keys(userInfo)
// 	data.forEach((key:any) => {
// 			setValue(key, userInfo[key]);
// 		 });
// 		// setStateUserInfo((e) => (!e))
// 		 console.log('userInfo');

//}else {
