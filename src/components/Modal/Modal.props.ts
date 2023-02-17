import { DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	children: ReactNode
	modalActive: boolean
	setModalActive: Dispatch<SetStateAction<boolean>>

}