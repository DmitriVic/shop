import { useState } from "react"
import { create } from "zustand"



export const useZustand = create(set => ({
	isAuth: false,
	dota: true,

	// isAuthActive: () => set( (isAuth:any)=>{
	// 	if (isAuth) {
	// 	return console.log( 'правда');	
	// 	} 
	// 	if (isAuth === false ) {
	// 		return console.log( 'ложь');	
	// 		} 
	// }),
	isAuthActive: () => set( {isAuth: true}),
	isAuthDisActive: () => set( {isAuth: false})
	
}))

