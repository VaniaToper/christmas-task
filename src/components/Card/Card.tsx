import React, { FC, useContext } from 'react';
import s from './Card.module.scss';
import { ICards } from '../../types/ITypes';
import { FavoriteContext } from '../../context';

async function getImage(num: string) {
  // import toyImage = require(`../../assets/filters/assets/toys/${num}.png`).default
  const users: string = await import(
    `../../assets/filters/assets/toys/${num}.png`
  );
  return users;
}

interface IProps {
  card: ICards;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
}

const Card: FC<IProps> = React.memo(
  ({ card: { count, year, shape, color, size, favorite, name, num } }) => {
    const { favoriteCards, setFavoriteCards } = useContext(FavoriteContext);
    const setFavoriteCardsArray = (checked: boolean, number: string) => {
      const cardIndex = parseInt(number) - 1;
      if (checked) return setFavoriteCards([...favoriteCards, cardIndex]);
      return setFavoriteCards(
        favoriteCards.filter((index: number) => {
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
              setFavoriteCardsArray(e.target.checked, num);
            }}
          />
          <span className={s.card__fav} />
        </label>
        <span className={s.card__title}>{name}</span>
        <img className={s.card__img} src={getImage(num)} alt={name} />
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
