import React, { useContext, useState } from 'react';
import s from './Card.module.scss';
import { ITypes } from '../../types/ITypes';
import { FavContext } from '../../context';

interface IProps {
  card: ITypes;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
}

const Card: React.FC<IProps> = React.memo(({
                                             card: {
                                               count,
                                               year,
                                               shape,
                                               color,
                                               size,
                                               favorite,
                                               name,
                                               num,
                                             },
                                             onChange,
                                             value,
                                           }) => {
  const { isFav, setIsFav } = useContext(FavContext);
  const setFavCards = (checked: Boolean, num: string) => {
    const cardIndex = parseInt(num) - 1;
    if (checked) return setIsFav([...isFav, cardIndex]);
    return setIsFav(isFav.filter((card) => {
      return card !== cardIndex;
    }));
  };

  return (
    <div className={s.card}>
      <label>
        <input type={'checkbox'} className={s.card__checkbox}
               onChange={(e) => {
                 setFavCards(e.target.checked, num);
               }} />
        <span className={s.card__fav} />
      </label>
      <span className={s.card__title}>{name}</span>
      <img className={s.card__img}
           src={require(`../../images/filters/assets/toys/${num}.png`).default}
           alt={name} />
      <div className={s.card__info}>

        <div>Count: {count}</div>
        <div>Year: {year}</div>
        <div>Shape: {shape}</div>
        <div>Color: {color}</div>
        <div>Size: {size}</div>
        <div>Favorite: {favorite.toString()}</div>
      </div>
    </div>
  );
});

export default Card;