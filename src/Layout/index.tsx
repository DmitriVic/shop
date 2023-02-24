import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';



import { Footer } from "./Footer"
import { _Main } from "./_Main"
import { _Header } from "./_Header"
import { indexProps } from "./index.props"
import { Outlet } from 'react-router-dom'

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


export const Layout = ({  }:indexProps): JSX.Element => {
	return (
		<div className={s.wrapper}>	
			<_Header
			className={s.header}
			/>
			<_Main
			className={s.main}>
				<Outlet/>
			</_Main>
			<Footer
			className={s.footer}
			/>
		</div>
	)
}

