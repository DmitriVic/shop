import { useState } from "react";
import { FormAufh } from "./FormAufh";
import s from "./index.module.css";
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props";
import { Modal } from "./Modal/Modal";

export const Registration = ({}: indexProps): JSX.Element => {
  const [modalActive, setModalActive] = useState(false);
  const [loginIcon, setLoginIcon] = useState(false);
  return (
    <div>
      {loginIcon ? <div>
			<div>Вы вошли</div>
			<div className={s.exit} onClick={()=>setLoginIcon(false)}>Выйти</div>
			</div>
		
		: <div className={s.registration} onClick={() => setModalActive(true)}>
			Войти
      </div>}
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <FormAufh
		 setModalActive={setModalActive} 
		 setLoginIcon={setLoginIcon}
		  />
      </Modal>
    </div>
  );
};
