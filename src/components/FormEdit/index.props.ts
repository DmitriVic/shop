// example

import { DetailedHTMLProps, Dispatch, HtmlHTMLAttributes, SetStateAction,  } from 'react';

export interface indexProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	userInfo?: object
	// children: ReactNode;
	// appearance: 'primary' | 'ghost';
	// arrow?: 'right' | 'down' | 'none';
	// modalActive: boolean
	// setModalActive: Dispatch<SetStateAction<boolean>>
}