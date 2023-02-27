
import s from './Modal.module.css'
import cn from 'classnames'
// import { ButtonProps } from './Button.props'

// import ArrowIcon from './arrow.svg';

import { ModalProps } from "./Modal.props"
import { useState } from 'react'


export function Modal({ children, modalActive, setModalActive }: ModalProps): JSX.Element {
	return (
		<div
			className={cn(s.modal, { [s.active]: modalActive })}
			onMouseDown={() => setModalActive(false)}
		>
			<div className={cn(s.modalWrapper, { [s.active]: modalActive })}
				onMouseDown={(e) => e.stopPropagation()}
			>
				<div className={s.modalBody}>
					<div className={s['more-snow']}>
					{children}
					</div>
				</div>
				<div className={s.cross} onClick={() => setModalActive(a => !a)}></div>
				
			</div>
		</div>
	)

}