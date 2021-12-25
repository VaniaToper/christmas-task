import React, { FC, useContext, useState } from 'react';
import s from './Card.module.scss';
import { ICards } from '../../types/ITypes';
import { FavContext } from '../../context';

interface IProps {
  card: ICards;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
}

const Card: FC<IProps> = React.memo(
  ({
    card: { count, year, shape, color, size, favorite, name, num },
    onChange,
    value,
  }) => {
    const { favCards, setFavCards } = useContext(FavContext);
    const setFavoriteCards = (checked: boolean, number: string) => {
      const cardIndex = parseInt(number) - 1;
      if (checked) return setFavCards([...favCards, cardIndex]);
      return setFavCards(
        favCards.filter((index: number) => {
          return index !== cardIndex;
        }),
      );
    };

    return (
      <div className={s.card}>
        <label>
          <input
            type={'checkbox'}
            className={s.card__checkbox}
            onChange={(e) => {
              setFavoriteCards(e.target.checked, num);
            }}
          />
          <span className={s.card__fav} />
        </label>
        <span className={s.card__title}>{name}</span>
        <img
          className={s.card__img}
          src={require(`../../images/filters/assets/toys/${num}.png`).default}
          alt={name}
        />
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
  },
);

export default Card;
