import React, { useContext } from 'react';
import s from './FavCards.module.scss';
import { FavContext } from '../../context';
import { ICards } from '../../types/ITypes';

interface IProps {
  data: ICards[];
}

const FavCards: React.FC<IProps> = ({ data }) => {
  const { isFav } = useContext(FavContext);
  const createArray = (count: number) => {
    return new Array(count).fill(null);
  };
  return (
    <div className={s.card__wrapper}>


      {isFav.length
        ? isFav.map(card => (
          <div className={s.card}>
            <div className={s.card__count}>{data[card].count}</div>
            <img
              className={s.card__image}
              src={require(`../../images/filters/assets/toys/${data[card].num}.png`).default}
              alt='' />
          </div>
        ))
        : createArray(20).map((card,index) => (
          <div className={s.card}>
            <div className={s.card__count}>{data[index].count}</div>
            <img
              className={s.card__image}
              src={require(`../../images/filters/assets/toys/${data[index].num}.png`).default}
              alt='' />
          </div>
        ))
      }
    </div>
  );
};

export default FavCards;