import React, { useContext, useMemo, useState } from 'react';
import s from './Modal.module.scss';
import { FavContext } from '../../../context';

const Modal = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const { isFav, setIsFav } = useContext(FavContext);
  const changeVisibility = useMemo(() => {
    if (isFav.length > 20) {
      setVisibility(true);
      return isFav.pop();
    }
    return setVisibility(false);
  }, [isFav]);
  return (
    <div className={visibility ? s.modal : s.modal__hidden}
         onClick={() => setVisibility(false)}>
      <div className={s.modal__content}>
        <span>To much favorite cards (maximum 20)</span>
      </div>
    </div>
  );
};

export default Modal;