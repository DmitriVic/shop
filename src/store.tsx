import { useState } from "react"
import { create } from "zustand"



export const useZustand = create(set => ({
	isAuth: false,
	dota: true,

	isAuthActive: () => set( {isAuth: true}),
	isAuthDisActive: () => set( {isAuth: false})
	
}))

