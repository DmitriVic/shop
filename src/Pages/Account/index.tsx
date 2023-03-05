import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { FormEdit } from "../../components/FormEdit"
import { indexProps } from "./index.props"
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'

// export const Button = ({ appearance, arrow = 'none',  children, className, ...props }: ButtonProps): JSX.Element => {
// 	return (
// 	<button  className={cn(s.button, className, {
// 		[s.primary]: appearance == 'primary',
// 		[s.ghost]: appearance == 'ghost',
// 	})}
// 	{...props}
// 	>
// 		{children}
// 		{arrow != 'none' && <span className={cn(s.arrow, {
// 				[s.down]: arrow == 'down'
// 			})}>
// 				<ArrowIcon />
// 			</span>}
			
// 	</button>)
// }


export const Account = ({  }:indexProps): JSX.Element => {


	
	return (
		<>
			<div className={s['title']}>Личный кабинет</div>
			<ul className={s['nav']}>
				<NavLink to={'Profile'} >Профиль</NavLink>
				<NavLink to={'Orders'} >Заказы</NavLink>
				<NavLink to={'Favourites'} >Избранное</NavLink>
			</ul>
			
			{/* <Routes>
				<Route path="a1" element={<div>Hello world</div>}/>
				<Route path="a2" element={<div>Hello world2</div>}/>
			</Routes> */}
			<Outlet/>
		</>
	)
}

