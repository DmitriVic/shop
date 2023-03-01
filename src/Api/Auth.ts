


//Вынуть токены из ssesionStorege
export const tokenDate = () => {
  const storageData = localStorage.getItem("tokenData");
  if (storageData !== null) {
    return JSON.parse(storageData);
  }
};

//-------------------------------------------------------------------------------------------------- 

//Положить токен в ssesionStorege
export const putTokenData = (data: any, tokenData:string ) => {
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



export const refreshToken = (token: string) => {
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
  });
};

export const getUserInfo = (tokenAccess: any) => {
  console.log(tokenAccess);
  console.log(tokenAccess.access);

  return fetch("http://127.0.0.1:8000/api/auth/users/Дмитрий/", {
    method: "get",
    headers: {
      Authorization: `Bearer ${tokenAccess.access}`,
    },
  }).then((response) => {
	console.log(response);
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`);
  });
  
  
};

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
