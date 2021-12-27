import React, { useContext, useState } from 'react';
import s from './FavCards.module.scss';
import { FavContext, TreeContext } from '../../context';
import { ICards } from '../../types/ITypes';

interface IProps {
  data: ICards[];
}

const FavCards: React.FC<IProps> = ({ data }) => {
  const { isFav } = useContext(FavContext);
  const { isHoverTree, toysOnTree, setToysOnTree } = useContext(TreeContext);
  const createArray = (count: number) => {
    return new Array(count).fill(null);
  };
  const setToy = (e, num: number) => {
    setToysOnTree([
      ...toysOnTree,
      {
        pos: {
          xPos: e.pageX,
          yPos: e.pageY,
        },
        toyNumber: num,
        id: Math.random() * 1000,
      },
    ]);
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
      {toysOnTree.map((toy) => (
        <img
          key={toy.id}
          onDragEnd={(e) => {
            console.log(e.pageX);
            toy.pos.xPos = e.pageX;
            toy.pos.yPos = e.pageY;
            // setToy(e, toy.toyNumber);
          }}
          style={{
            position: 'absolute',
            top: `${toy.pos.yPos}px`,
            left: `${toy.pos.xPos}px`,
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
