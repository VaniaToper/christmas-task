import React, { useContext } from 'react';
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
    if (isHoverTree) {
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
              let copyToy = [...toysOnTree];
              copyToy[index].pos.yPos = e.pageY;
              copyToy[index].pos.xPos = e.pageX;
              setToysOnTree(copyToy);
            }
          }}
          style={{
            position: 'absolute',
            left: `${toy.pos.xPos}px`,
            top: `${toy.pos.yPos}px`,
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
