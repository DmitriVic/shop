import { useEffect, useState } from "react";
import { getUserInfo, refreshToken } from "../../Api/Auth";
import { Registration } from "../Registration";
import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

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

export const Header = ({}: indexProps): JSX.Element => {
  const [userData, setUserData] = useState({});
  //console.log(userData);
  
 
  
  function hadleClickRefresh(params: any) {
	const storageData = sessionStorage.getItem("tokenData");
    if (storageData !== null) {
      const myDataObject = JSON.parse(storageData);
      refreshToken(myDataObject.refresh)
		.then((res) =>
        alert(`Токен access получен  ${res.access}`)
      );
    } else {
      alert(
        "ssisionStorege пусто, чтобы обновить токен, войдите пользователем и получите токен"
      );
    }
  }
  // очищаем ssesionStorege при перезагрузке страницы
  window.addEventListener("beforeunload", function () {
    sessionStorage.clear();
  });

  const handleClickUserInfo = () => {
	//getUserInfo()
  };

  return (
    <div className={s.header}>
      <div className={s.branch}>Dev</div>
      <div className={s.wrapper}>
        <h1>header</h1>
        <button style={{ cursor: "pointer" }} onClick={hadleClickRefresh}>
          Обновить токен
        </button>
        <button onClick={handleClickUserInfo}>
          Получить инфо по пользователю
        </button>
      </div>
      <Registration setUserData={setUserData} />
    </div>
  );
};
