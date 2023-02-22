
export const authorize =(data:any) =>{
	return fetch("http://127.0.0.1:8000/api/auth/token/", {
		method: "post",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	 })	
	 .then((response) => {
		return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)
  })
}

export const refreshToken = (token:string) =>{
return fetch('http://127.0.0.1:8000/api/auth/token/refresh/',{
		method: 'post',
		headers: {
			'Content-type' : 'application/json'
		},
		body: JSON.stringify({
			refresh:token})
	})
	.then((response) => {
		return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)
  })
}

export const getUserInfo = (tokenAccess:any)=> {
	return fetch("http://127.0.0.1:8000/api/auth/users/103/", {
			method: "get",
			headers: {
				'Authorization' : `Bearer ${tokenAccess.access}`
			}
		 })
		 .then(response =>{
			return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)
		 })
}