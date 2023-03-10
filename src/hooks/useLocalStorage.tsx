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

const setValue2 = (keyName:string,parametr2:any)=>{
	console.log(keyName);
	
	 return setValue(parametr2)
}

	// useEffect(() => {
	  
	// localStorage.setItem(key, JSON.stringify(value))
	//   console.log(`положил ${value}`);
	
	  
	// }, [value])
	
	
	return [value, setValue2]
}



// export function useLocalStorage(initialValue:any, key:any) {
// 	const getValue = () => {
// 		const storage = localStorage.getItem(key)
// 		if (storage) {
// 			return JSON.parse(storage)
// 		}
// 		return initialValue
// 	}

// 	const [value, setValue] = useState(getValue)
// console.log(value);

// 	useEffect(() => {
	  
// 	localStorage.setItem(key, JSON.stringify(value))
// 	  console.log(`положил ${value}`);
	
	  
// 	}, [value])
	
	
// 	return [value, setValue]
// }