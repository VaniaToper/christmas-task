import React, { FC, useContext, useMemo, useState } from 'react';
import s from './Modal.module.scss';
import { FavoriteContext } from '../../../context';

const Modal: FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const { favoriteCards, setFavoriteCards } = useContext(FavoriteContext);
  const changeVisibility = useMemo(() => {
    if (favoriteCards.length > 20) {
      setVisibility(true);
      return favoriteCards.pop();
    }
    return setVisibility(false);
  }, [favoriteCards]);
  return (
    <div
      className={visibility ? s.modal : s.modal__hidden}
      onClick={() => setVisibility(false)}
    >
      <div className={s.modal__content}>
        <span>To much favoriteorite cards (maximum 20)</span>
      </div>
    </div>
  );
};

export default Modal;
