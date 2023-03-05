
import { create } from "zustand"

// const token = localStorage.getItem('tokenData')
// const isAuthActive = useZustand((state:any) => state.isAuthActive)


export const useZustand = create(set => ({
	isAuth: false,

	isAuthActive: () => set( {isAuth: true}),
	isAuthDisActive: () => set( {isAuth: false})
	
}))

