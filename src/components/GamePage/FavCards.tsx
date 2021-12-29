import React, { useContext, useState } from 'react';
import s from './FavCards.module.scss';
import { FavContext, TreeContext } from '../../context';
import { ICards } from '../../types/ITypes';

interface IProps {
  data: ICards[];
}

const FavCards: React.FC<IProps> = ({ data }) => {
  const [cards, setCards] = useState<ICards[]>(data);
  const [isHide, setIsHide] = useState<boolean[]>([]);
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
      let copyCards = [...cards];
      const count = parseInt(copyCards[num].count) - 1;
      copyCards[num].count = count.toString();
      setCards(copyCards);
    }
    let copyIsHide = [...isHide];
    copyIsHide[num] = parseInt(cards[num].count) < 1;
    setIsHide(copyIsHide);
  };

  return (
    <div className={s.card__wrapper}>
      {isFav.length
        ? isFav.map((card, index) => (
            <div className={!isHide[index] ? s.card : s.card__hide}>
              <div className={s.card__count}>{cards[card].count}</div>
              <img
                className={s.card__image}
                onDragEnd={(e) => {
                  setToy(e, index);
                }}
                src={
                  require(`../../images/filters/assets/toys/${cards[card].num}.png`)
                    .default
                }
                alt="toy"
              />
            </div>
          ))
        : createArray(20).map((card, index) => (
            <div key={index} className={!isHide[index] ? s.card : s.card__hide}>
              <div className={s.card__count}>{cards[index].count}</div>
              <img
                onDragEnd={(e) => {
                  setToy(e, index);
                }}
                className={s.card__image}
                src={
                  require(`../../images/filters/assets/toys/${cards[index].num}.png`)
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
            } else {
              setToysOnTree(
                [...toysOnTree].filter((toy) => {
                  return toy !== toysOnTree[index];
                }),
              );
              let copyCards = [...cards];
              const count = parseInt(copyCards[toy.toyNumber].count) + 1;
              copyCards[toy.toyNumber].count = count.toString();
              setCards(copyCards);
              let copyIsHide = [...isHide];
              copyIsHide[toy.toyNumber] =
                parseInt(cards[toy.toyNumber].count) < 1;
              setIsHide(copyIsHide);
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
