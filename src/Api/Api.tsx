import axios from "axios";
import {
  checkAccessToken,
  getDataLocalStorage,
  refreshToken,
} from "./Auth";


// -----------------------------------------------------------------------------------------------

//Функция выполняет запрос редактирования
export async function editUser(data: object) {
  if (checkAccessToken()) {
    await refreshToken();
  }
  const user = getDataLocalStorage("userName");
  const accessToken = getDataLocalStorage("tokenData").access;

  return await axios
    .put(`http://127.0.0.1:8000/api/auth/user/${user}/`, data, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    })
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