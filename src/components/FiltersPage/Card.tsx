import React, { useContext, useState } from 'react';
import s from './Card.module.scss';
import { ICard } from '../../types/ICard';
import { FavContext } from '../../context';

interface IProps {
  card: ICard;
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
  return (
    <div  className={s.card}>
      <input type={'checkbox'} className={s.card__fav}
             onChange={(e) => {
               if (e.target.checked) return setIsFav([...isFav, num]);
               else return setIsFav([isFav].filter(() => !isFav.includes(num)));
             }} />
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