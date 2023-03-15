import { useEffect, useState } from "react";
import { refreshToken } from "../Api/Auth";

export function useToken (initialValue:any, key:any) {
	const getValue = () => {
		const storage = localStorage.getItem(key)
		if (storage) {
			//return JSON.parse(storage)
			//console.log(storage);
			let { access, refresh, timeCreateToken } = JSON.parse(storage);
			let newStorage = { access, refresh, timeCreateToken };
			return newStorage
			
		}
		return initialValue
	}

	const [tokens, setTokens] = useState(getValue)
//console.log(value);

	const newDate = new Date()
	const timeDate = tokens.timeCreateToken
	const date = new Date(timeDate)
	const differenceInSeconds = (newDate.getTime() - date.getTime()) / 1000
	
	const f = async () => {
		// const res  =	await refreshToken(tokens.refresh)
		// 	console.log(res);
			if (differenceInSeconds > 290) {
				console.log('обновить токен');
			const res  =	await refreshToken(tokens.refresh)
			console.log(res);
			
			//.then((res) => {console.log(res)})
			
			} 
		}
	f()
	// .then(data => {
	// 	const time = new Date().toString()
	// 	data.timeCreateToken = time
	// 	putDataLocalStorage('tokenData', data)

	useEffect(() => {
	  
	// localStorage.setItem(key, JSON.stringify(value))
	//   console.log(`положил ${value}`);
	
	}, [])
	
	
	return [tokens, setTokens]
}

//  const checkAccessToken = ()=> {
// 	const newDate = new Date()

// 	const timeDate = tokens.timeCreateToken
// 	const date = new Date(timeDate)
	
// 	const differenceInSeconds = (newDate.getTime() - date.getTime()) / 1000
// 	if (differenceInSeconds > 290) {
// 		return true 
// 	} else {
// 		return false
// 	}
// }