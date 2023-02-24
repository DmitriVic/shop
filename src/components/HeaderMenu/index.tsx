 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { Link } from "react-router-dom"
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


export const HeaderMenu = ({  }:indexProps): JSX.Element => {
	return (
		<>
			<ul className={s['header-menu']}>
				<Link to="">Каталог украшений</Link>
				<Link to="">Коллекции</Link>
				<Link to="">Акции</Link>
				<Link to="">Адреса магазинов</Link>
				<Link to="">Сервисы</Link>
				<Link to="">Программа лояльности</Link>
				<Link to="">Вакансии</Link>
				<Link to="">Партнерам</Link>
			</ul>
		</>
	)
}








