import React, { useContext, useState } from 'react';
import s from './FavCards.module.scss';
import { FavContext } from '../../context';
import { ICards } from '../../types/ITypes';

interface IProps {
  data: ICards[];
}

const FavCards: React.FC<IProps> = ({ data }) => {
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [xPos, setXPos] = useState<number>(0);
  const [yPos, setYPos] = useState<number>(0);
  const [currentCard, setCurrentCard] = useState<number>(0);
  const { isFav } = useContext(FavContext);
  const createArray = (count: number) => {
    return new Array(count).fill(null);
  };
  const setDragTrue = (e, num: number) => {
    setXPos(e.pageX);
    setYPos(e.pageY);
    setIsDrag(false);
    setCurrentCard(num);
  };
  return (
    <div className={s.card__wrapper}>
      {isFav.length
        ? isFav.map((card) => (
            <div className={s.card}>
              <div className={s.card__count}>{data[card].count}</div>
              <img
                className={s.card__image}
                src={
                  require(`../../images/filters/assets/toys/${data[card].num}.png`)
                    .default
                }
                alt="toy"
              />
            </div>
          ))
        : createArray(20).map((card, index) => (
            <div key={index} className={s.card}>
              <div className={s.card__count}>{data[index].count}</div>
              <img
                onDragStart={(e) => setIsDrag(true)}
                onDragEnd={(e) => {
                  setDragTrue(e, index);
                }}
                className={s.card__image}
                src={
                  require(`../../images/filters/assets/toys/${data[index].num}.png`)
                    .default
                }
                alt="toy"
              />
            </div>
          ))}

      {isDrag ? (
        ''
      ) : (
        <img
          style={{ position: 'absolute', top: `${yPos}px`, left: `${xPos}px` }}
          onDragStart={(e) => setIsDrag(true)}
          onDragEnd={(e) => {
            setDragTrue(e, currentCard);
          }}
          draggable={true}
          className={s.card__image}
          src={
            require(`../../images/filters/assets/toys/${data[currentCard].num}.png`)
              .default
          }
          alt="toy"
        />
      )}
    </div>
  );
};

export default FavCards;
