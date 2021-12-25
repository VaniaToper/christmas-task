import React, { FC, useContext, useMemo, useState } from 'react';
import s from './Modal.module.scss';
import { FavContext } from '../../../context';

const Modal: FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const { favCards, setFavCards } = useContext(FavContext);
  const changeVisibility = useMemo(() => {
    if (favCards.length > 20) {
      setVisibility(true);
      return favCards.pop();
    }
    return setVisibility(false);
  }, [favCards]);
  return (
    <div
      className={visibility ? s.modal : s.modal__hidden}
      onClick={() => setVisibility(false)}
    >
      <div className={s.modal__content}>
        <span>To much favorite cards (maximum 20)</span>
      </div>
    </div>
  );
};

export default Modal;
