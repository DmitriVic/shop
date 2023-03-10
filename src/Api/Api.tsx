import axios from "axios";
import { checkAccessToken, getDataLocalStorage, putDataLocalStorage, refreshToken } from "./Auth";

// -----------------------------------------------------------------------------------------------

//Функция выполняет запрос редактирования
export async function editUser(user:string,accessToken: string, data: object) {
//   if (checkAccessToken()) {
//     await refreshToken();
//   }



  
  return await axios.put(`http://127.0.0.1:8000/api/auth/user/${user}/`, data, {
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  })
  //.then((res) => {console.log(res)})
  .then((res) => { putDataLocalStorage('userInfo', res.data) });
}

//----------------------------------------------------------------------------------------------------

export async function getUserInfo(user:string, accessToken:string) {
	
// 	const token =	getDataLocalStorage('tokenData').refresh
// 	if (checkAccessToken()) {
// 		await refreshToken(token);
// 	 }

//   const user = getDataLocalStorage("userName");
//   const accessToken = getDataLocalStorage("tokenData").access;
  
//   console.log(user);
//   console.log(accessToken);

  return await axios
    .get(`http://127.0.0.1:8000/api/auth/user/${user}/`, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    })
    .then((res) => { putDataLocalStorage('userInfo', res.data) });
}

// return fetch(`http://127.0.0.1:8000/api/auth/user/${user}/`, {
//   method: "put",
//   headers: {
// 	 Authorization: `JWT ${accessToken}`,
// 	 "Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(data),
// }).then((response) => {
//  console.log(response);
//   return response.ok
// 	 ? response.json()
// 	 : Promise.reject(`Ошибка: ${response.status}`);
// })
// .then((res) => {console.log(res)})


// for (let key in data) {
//   if (data[key] !== userInfo[key]) {
//     result[key] = data[key];
//   }
// }