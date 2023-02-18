import { useState } from "react";
import { FormAufh } from "./FormAufh";
import { FormReg } from "./FormReg";
//import { Modal } from "../Modal/Modal";
import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props";
import { Modal } from "./Modal/Modal";

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

export const Registration = ({}: indexProps): JSX.Element => {
  const [modalActive, setModalActive] = useState(false);
  //const [changeModal, setChangeModal] = useState(true);
  //console.log(setChangeModal);
  return (
    <div>
      <div className={s.registration} onClick={() => setModalActive(true)}>
        войти
      </div>
      <Modal
		 modalActive={modalActive} 
		 setModalActive={setModalActive}>
			
        <FormAufh 
		  //setChangeModal={setChangeModal} 
		  //changeModal={changeModal}
		   />
      </Modal>
    </div>
  );
};
