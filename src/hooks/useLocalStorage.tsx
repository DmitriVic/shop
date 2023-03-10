import { useEffect, useState } from "react";

export function useLocalStorage(initialValue:any, key:any) {
	const getValue = () => {
		const storage = localStorage.getItem(key)
		if (storage) {
			return JSON.parse(storage)
		}
		return initialValue
	}

	const [value, setValue] = useState(getValue)
console.log(value);

	useEffect(() => {
	  
	localStorage.setItem(key, JSON.stringify(value))
	  console.log(`положил ${value}`);
	
	}, [value])
	
	
	return [value, setValue]
}