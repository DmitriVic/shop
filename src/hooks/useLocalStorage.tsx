import { useEffect, useState } from "react";

//initialValue:any, key:any
export function useLocalStorage(initialValue:any) {
	// const getValue = () => {
	// 	const storage = localStorage.getItem(key)
	// 	if (storage) {
	// 		return JSON.parse(storage)
	// 	}
	// 	return initialValue
	// }

	const [value, setValue] = useState(initialValue)
console.log(value);

	useEffect(() => {
	  
	// localStorage.setItem(key, JSON.stringify(value))
	//   console.log(`положил ${value}`);
	console.log('chenge');
	
	  
	}, [value])
	
	
	return [value, setValue]
}
