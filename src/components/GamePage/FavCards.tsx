import React, { useContext, useState } from 'react';
import s from './FavCards.module.scss';
import { FavContext, TreeContext } from '../../context';
import { ICards } from '../../types/ITypes';

interface IProps {
  data: ICards[];
}

const FavCards: React.FC<IProps> = ({ data }) => {
  const { isFav } = useContext(FavContext);
  const { isHoverTree, toysOnTree, setToysOnTree, toyPos, setToyPos } =
    useContext(TreeContext);
  const createArray = (count: number) => {
    return new Array(count).fill(null);
  };
  const setToy = (e, num: number) => {
    if (isHoverTree) {
      setToysOnTree([
        ...toysOnTree,
        {
          toyNumber: num,
          id: Math.random() * 1000,
        },
      ]);
      setToyPos([
        ...toyPos,
        {
          xPos: e.pageX,
          yPos: e.pageY,
        },
      ]);
    }
    console.log(toysOnTree);
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
                onDragEnd={(e) => {
                  setToy(e, index);
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
      {toysOnTree.map((toy, index) => (
        <img
          key={toy.id}
          onDragEnd={(e) => {
            if (isHoverTree) {
              setToyPos([...toyPos, (toyPos[index].xPos = e.pageX)]);
              setToyPos([...toyPos, (toyPos[index].yPos = e.pageY)]);
            }
            console.log(toyPos);
          }}
          style={{
            position: 'absolute',
            left: `${toyPos[index].xPos}px`,
            top: `${toyPos[index].yPos}px`,
          }}
          className={s.card__image}
          src={
            require(`../../images/filters/assets/toys/${toy.toyNumber + 1}.png`)
              .default
          }
          alt="toy"
        />
      ))}
    </div>
  );
};

export default FavCards;
