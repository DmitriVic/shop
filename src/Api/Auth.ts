const keyUserData = 'userData'



export  function addTokenLifeTime(data: any,dataForm:any) {
	const time = new Date().toString();
	data.timeCreateToken = time;
	data.username = dataForm.username;
}



//--------------------------------------------------------------------------------------------------



//Проверка Refresh токена, при прохождении 24часа от создания токена выход из акаунта



export const checkRefreshToken = ()=> {

	//const navigate = useNavigate() 
	const newDate = new Date()
	const tokenData = getDataLocalStorage('tokenData')
	const timeDate = tokenData.timeCreateToken
	const date = new Date(timeDate)
	
	const differenceInSeconds = (newDate.getTime() - date.getTime()) / 1000
	//console.log(differenceInSeconds);
	
	if (differenceInSeconds > 86400) {
		localStorage.clear()
		return true
	} else {
		//console.log('токен действителен');
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

// export async function  editUser  (obj: any)  {
// 	return await fetch("http://127.0.0.1:8000/api/auth/token/", {
// 	  method: "post",
// 	  headers: {
// 		 "Content-Type": "application/json",
// 	  },
// 	  body: JSON.stringify(obj),
// 	})
//  };

//--------------------------------------------------------------------------------------------------


// обновить токен
export const refreshToken = (token:string) => {

	
	//--------------------------------------------------------------------------------------------
	
	
	
	//--------------------------------------------------------------------------------------------
	

	
  return fetch("http://127.0.0.1:8000/api/auth/token/refresh/", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      refresh: token,
    }),
  }).then((response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`);
  })

  
  //-------------------------------------------------------------------------------------------
  
 


//   .then(data => {
// 	const time = new Date().toString()
// 	data.timeCreateToken = time
// 	putDataLocalStorage('tokenData', data)
// })




//---------------------------------------------------------------------------------------------


};

//--------------------------------------------------------------------------------------------------

// export const getUserInfo = (tokenAccess: any) => {
//   console.log(tokenAccess.access);

//   return fetch("http://127.0.0.1:8000/api/auth/user/dima", {
//     method: "get",
//     headers: {
//       Authorization: `JWT ${tokenAccess.access}`,
//     },
//   }).then((response) => {
// 	console.log(response);
//     return response.ok
//       ? response.json()
//       : Promise.reject(`Ошибка: ${response.status}`);
//   });
  
  
// };




// export const getUserInfo = (tokenAccess:any)=> {
// 	console.log(tokenAccess);
// 	console.log(tokenAccess.access);

// 	return fetch("http://127.0.0.1:8000/api/auth/users/103/", {
// 			method: "get",
// 			headers: {
// 				'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MDk0NTU4LCJpYXQiOjE2NzcwOTM4NDIsImp0aSI6IjdjMGMwZWRiMjZhMjRlM2ZiZjI5YjIwMWQ3NmRhMjJkIiwidXNlcl9pZCI6MTA3fQ.I6dO1C7coXvbCTdbs-9dnC1P_339EkWAnPXAMksWozw`
// 			}
// 		 })
// 		 .then(response =>{
// 			return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)
// 		 })
// }
