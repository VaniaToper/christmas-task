import React, { useContext, useState } from 'react';
import s from './FavoriteCards.module.scss';
import { FavoriteContext, TreeContext } from '../../context';
import { ICards, IToyOnTree } from '../../types/ITypes';

interface IProps {
  data: ICards[];
}

const FavoriteCards: React.FC<IProps> = ({ data }) => {
  const [cards, setCards] = useState<ICards[]>(data);
  const [isHide, setIsHide] = useState<boolean[]>([]);
  const { favoriteCards } = useContext(FavoriteContext);
  const { isHoverTree, toysOnTree, setToysOnTree } = useContext(TreeContext);
  const createArray = (count: number) => {
    return new Array(count).fill(null);
  };
  const setToy = (e: React.DragEvent<HTMLImageElement>, num: number) => {
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
      const copyCards = [...cards];
      const count = parseInt(copyCards[num - 1].count) - 1;
      copyCards[num - 1].count = count.toString();
      setCards(copyCards);
    }
    const copyIsHide = [...isHide];
    copyIsHide[num - 1] = parseInt(cards[num - 1].count) < 1;
    setIsHide(copyIsHide);
  };

  return (
    <div className={s.card__wrapper}>
      {favoriteCards.length
        ? favoriteCards.map((card, index) => (
            <div className={!isHide[index] ? s.card : s.card__hide}>
              <div className={s.card__count}>
                {cards[favoriteCards[index]].count}
              </div>
              <img
                className={s.card__image}
                onDragEnd={(e) => {
                  setToy(e, favoriteCards[index] + 1);
                  console.log(favoriteCards);
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
                  setToy(e, parseInt(cards[index].num));
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
      {toysOnTree.map((toy: IToyOnTree, index: number) => (
        <img
          key={toy.id}
          onDragEnd={(e) => {
            if (isHoverTree) {
              const copyToy = [...toysOnTree];
              copyToy[index].pos.yPos = e.pageY;
              copyToy[index].pos.xPos = e.pageX;
              setToysOnTree(copyToy);
            } else {
              setToysOnTree(
                [...toysOnTree].filter((treeToy) => {
                  return treeToy !== toysOnTree[index];
                }),
              );
              const copyCards = [...cards];
              const count = parseInt(copyCards[toy.toyNumber].count) + 1;
              copyCards[toy.toyNumber].count = count.toString();
              setCards(copyCards);
              const copyIsHide = [...isHide];
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
            require(`../../images/filters/assets/toys/${toy.toyNumber}.png`)
              .default
          }
          alt="toy"
        />
      ))}
    </div>
  );
};

export default FavoriteCards;
