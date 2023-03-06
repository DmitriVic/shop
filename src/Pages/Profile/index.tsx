// import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { useEffect } from "react"
import { getUserInfo } from "../../Api/Api"
import { getDataLocalStorage } from "../../Api/Auth"
import { FormEdit } from "../../components/FormEdit"
import { indexProps } from "./index.props"

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


export const Profile = ({  }:indexProps): JSX.Element => {
	useEffect(() => {
		const userInfo = getDataLocalStorage("userInfo");
		
		
		getUserInfo()
	console.log('useeffect');
	
	
	}, [])
	
	return (
		<>
			<FormEdit
	
			/>
		</>
	)
}

