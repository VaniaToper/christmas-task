import React from 'react';
import s from './Card.module.scss';
import { ICard } from '../../types/ICard';

interface IProps {
  card: ICard;
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
                                           }) => {
  return (
    <div className={s.card}>
      <input type={'checkbox'} className={s.card__fav}
             onChange={() => !!!favorite} />
      <span className={s.card__title}>{name}</span>
      <div
        style={{ backgroundImage: `url(http://localhost:3000/images/filters/assets/toys/${num}.png)` }}
        className={s.card__img} />
      <div className={s.card__info}>
        <div>Count: {count}</div>
        <div>Year: {year}</div>
        <div>Shape: {shape}</div>
        <div>Color: {color}</div>
        <div>Size: {size}</div>
        <div>Favorite: {favorite}</div>
      </div>
    </div>
  );
});

export default Card;