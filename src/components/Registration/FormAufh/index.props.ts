// example

import { DetailedHTMLProps, Dispatch, HtmlHTMLAttributes, SetStateAction,  } from 'react';

export interface indexProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	// children: ReactNode;
	// appearance: 'primary' | 'ghost';
	// arrow?: 'right' | 'down' | 'none';
	changeModal?: boolean
	setChangeModal?: Dispatch<SetStateAction<boolean>>
	setModalActive : Dispatch<SetStateAction<boolean>>
	setLoginIcon : Dispatch<SetStateAction<boolean>>
}