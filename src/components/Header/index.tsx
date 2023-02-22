import { useEffect, useState } from "react";
import { getUserInfo, putTokenData, refreshToken, tokenDate } from "../../Api/Auth";
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
    if (tokenDate()) {
      refreshToken(tokenDate().refresh) // refreshToken-api запрос, tokenDate f вернет {tokenDate} из sessionStorege
		.then((res) =>{
			
			  //console.log(tokenDate())
			  console.log(res)
			 let newTokenData = tokenDate()
			 newTokenData.access = res.access 
			// //console.log(putTokenData(newTokenData));
			 
			 console.log(newTokenData);
			 console.log(putTokenData(newTokenData));
			  //sessionStorage.setItem("tokenData", JSON.stringify(newTokenData));
			console.log(sessionStorage.tokenData);
			
		}
			
			
        //alert(`Токен access получен  ${res.access}`)
		)
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
	getUserInfo(tokenDate())
	.then(res => {
		alert(JSON.stringify(res));
		 
		
		
		//console.log(result.JSON.stringify());
		
		// for (const key in res) {
		// 	console.log(key)
			
		// }
	})
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
