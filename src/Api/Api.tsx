import axios from "axios";


// -----------------------------------------------------------------------------------------------

//Функция выполняет запрос редактирования
export async function editUser(user:string,accessToken: string, data: object) {
	
  return await axios.put(`http://127.0.0.1:8000/api/auth/user/${user}/`, data, {
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  })

}

//----------------------------------------------------------------------------------------------------

export async function getUserInfo(user:string, accessToken:string) {
	
  return await axios
    .get(`http://127.0.0.1:8000/api/auth/user/${user}/`, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    })
	 .then((res) => res.data)
}

//--------------------------------------------------------------------------------------------------

export async function uploadAvatar(user:string, accessToken:string, file:any) {
	
	return await axios.put(`http://127.0.0.1:8000/api/auth/user/${user}/avatar/`,  {
		 headers: {
			Authorization: `JWT ${accessToken}`,
			"Content-Type": "multipart/form-data",
		 },
	  })
	  .then((res) => console.log(res.data)
	   )
 }
 