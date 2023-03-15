import { useEffect, useState } from "react";

// type store ={
// 	access: string
// 	refresh:string
// 	timeCreateToken:any
// 	userName: string

// }

export function useLocalStorage(initialValue:any, key:any) {
	const getValue = () => {
		const storage:any = localStorage.getItem(key)
		if (storage) {
		
			const newStorage = JSON.parse(storage)
			//  const time = new Date().toString()
			//  newStorage.timeCreateToken = time
			//  console.log(newStorage);
			
			return newStorage
		}
		return initialValue
	}

	const [value, setValue] = useState(getValue)
//console.log(value);
//var = "eyJ0eXAiO.../// jwt token";
//var decoded  = jwt_decode(value.access);
//console.log(value.access);


// if (decoded) {
// 	console.log(decoded);
// }
 
// console.log(decoded);
	useEffect(() => {
	   //  const time = new Date().toString()
		// newStorage.timeCreateToken = time
	
	localStorage.setItem(key, JSON.stringify(value))
	 // console.log(value);
	
	}, [value])
	
	
	return [value, setValue]
}