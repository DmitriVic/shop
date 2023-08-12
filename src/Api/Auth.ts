import axios from "axios"

const keyUserData = 'userData'
//--------------------------------------------------------------------------------------------------

//Добавление время создания access токена

 export const addTimeToken = (data:any) => {
	const time = new Date().toString()
	data.timeCreateToken = time
}

//---------------------------------------------------------------------------------------------------

//Проверка Refresh токена, при прохождении 24часа от создания токена выход из акаунта
export const checkRefreshToken = ()=> {

	const newDate = new Date()
	const tokenData = getDataLocalStorage('tokenData')
	const timeDate = tokenData.timeCreateToken
	const date = new Date(timeDate)
	
	const differenceInSeconds = (newDate.getTime() - date.getTime()) / 1000
	
	if (differenceInSeconds > 86400) {
		localStorage.clear()
		return true
	} else {
		return false
	}
}

//--------------------------------------------------------------------------------------------------

// Проверка Access токена, при прохождении 290с от создания токена вернет true esle false

 export const checkAccessToken = ()=> {
	const newDate = new Date()
	const tokenData = getDataLocalStorage('tokenData')
	const timeDate = tokenData.timeCreateToken
	const date = new Date(timeDate)
	
	const differenceInSeconds = (newDate.getTime() - date.getTime()) / 1000
	if (differenceInSeconds > 290) {
		return true 
	} else {
		return false
	}
}

//--------------------------------------------------------------------------------------------------

//Удалить инфо о плозователе из localStorage

export const removeUserNameLocalStorage = () => {
	localStorage.removeItem('userName');
 };

//-------------------------------------------------------------------------------------------------- 


//Вынуть значение из localStorage 
export const getDataLocalStorage = (data:string) => {
  const storageData = localStorage.getItem(data);
  if (storageData !== null) {
    return JSON.parse(storageData);
  }
};

//-------------------------------------------------------------------------------------------------- 

//Положить ключ-значение в localStorage
export const putDataLocalStorage = (tokenData:string ,data: any) => {
  localStorage.setItem( tokenData, JSON.stringify(data));
};

//-------------------------------------------------------------------------------------------------- 

export const registerUser = (data: any) => {
  return fetch("http://127.0.0.1:8000/api/auth/user/reg/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
};

//-------------------------------------------------------------------------------------------------- 

export async function  authUser  (obj: any)  {
  return await fetch("http://127.0.0.1:8000/api/auth/token/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
};

//--------------------------------------------------------------------------------------------------



//обновить токен
export const refreshToken = async (token:string) => {
	 const data = await axios.post("http://127.0.0.1:8000/api/auth/token/refresh/", {
		refresh:token
	})
	
	  return  data.data

 }
 
//---------------------------------------------------------------------------------------------




