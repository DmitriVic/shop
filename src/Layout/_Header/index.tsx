 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props"
import  heart  from './img/heart.svg'
import  basket  from './img/basket.svg'
import  vk  from './img/vk.svg'
import  telegram  from './img/telegram.svg'
import  magnifier  from './img/magnifier.svg'
import { Link } from 'react-router-dom'
import { HeaderMenu } from '../../components/HeaderMenu'

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


export const _Header = ({ className }:indexProps): JSX.Element => {
	return (
		<div className={className}>
			<div className={s.panel}>
			<div className={s.content}>
				<a className={s.tel} href="tel: 88008888888">8 (800) 888-88-88</a>
				
				<div className={s['right-content']}>
					<label htmlFor="search">
					<img src={magnifier} className={s.magnifier} alt="" />
					<input className={s.search} type="text" name="text" id="search" placeholder='Поиск Брошек' />
					</label>
					<div>
						<img className={s.vk} src={vk} alt="" />
						<img className={s.telegram} src={telegram} alt="" />
					</div>
					<Link to="authorization" className={s.enter}>Войти</Link>
				</div>
			</div>
			</div>
			<div className={s.wrapper}>
				<div className={s['wrapper__content']}>
					<div></div>
					<Link to="/" className={s.title}>Брошки(link дом.стр)</Link>
					<div className={s.links}>
						<Link to="account" >Личный кабинет</Link>
						<img className={s.heart} src={heart} alt="" />
						<img className={s.basket} src={basket} alt="" />
					</div>
				</div>
			</div>
			<HeaderMenu/>
		</div>
	)
}

