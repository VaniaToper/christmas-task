import React, { DragEvent, FC, useContext, useState } from 'react';
import s from './FavoriteCards.module.scss';
import { FavoriteContext, TreeContext } from '../../context';
import { ICards, IToyOnTree } from '../../types/ITypes';
import ToyCard from '../ToyCard/ToyCard';

interface IProps {
  data: ICards[];
}

const FavoriteCards: FC<IProps> = ({ data }) => {
  const [cards, setCards] = useState<ICards[]>(data);
  const [isHide, setIsHide] = useState<boolean[]>([]);
  const { favoriteCards } = useContext(FavoriteContext);
  const { isHoverTree, toysOnTree, setToysOnTree } = useContext(TreeContext);
  const createArray = (count: number) => {
    return new Array(count).fill(null);
  };
  const setToy = (e: DragEvent<HTMLImageElement>, cardNumber: number) => {
    if (isHoverTree) {
      setToysOnTree([
        ...toysOnTree,
        {
          pos: {
            xPos: e.pageX,
            yPos: e.pageY,
          },
          toyNumber: cardNumber,
          id: Math.random() * 1000,
        },
      ]);
      const copyCards = [...cards];
      const count = parseInt(copyCards[cardNumber - 1].count) - 1;
      copyCards[cardNumber - 1].count = count.toString();
      setCards(copyCards);
    }
    const copyIsHide = [...isHide];
    copyIsHide[cardNumber - 1] = parseInt(cards[cardNumber - 1].count) < 1;
    setIsHide(copyIsHide);
  };

  const dragToyOnTree = (
    e: DragEvent<HTMLImageElement>,
    index: number,
    toy: IToyOnTree,
  ) => {
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
      const count = parseInt(copyCards[toy.toyNumber - 1].count) + 1;
      copyCards[toy.toyNumber - 1].count = count.toString();
      setCards(copyCards);
      const copyIsHide = [...isHide];
      copyIsHide[toy.toyNumber - 1] =
        parseInt(cards[toy.toyNumber - 1].count) < 1;
      setIsHide(copyIsHide);
    }
  };

  return (
    <div className={s.card__wrapper}>
      {favoriteCards.length
        ? favoriteCards.map((card, index) => (
            <ToyCard
              cards={cards}
              onDragEnd={setToy}
              cardNumber={card}
              index={favoriteCards[index]}
              isHide={isHide[favoriteCards[index]]}
              count={cards[favoriteCards[index]].count}
              key={index}
            />
          ))
        : createArray(20).map((card, index) => (
            <ToyCard
              cards={cards}
              onDragEnd={setToy}
              cardNumber={index}
              index={index}
              isHide={isHide[index]}
              count={cards[index].count}
              key={index}
            />
          ))}
      {toysOnTree.map((toy: IToyOnTree, index: number) => (
        <img
          key={toy.id}
          onDragEnd={(e) => {
            dragToyOnTree(e, index, toy);
          }}
          style={{
            position: 'absolute',
            left: `${toy.pos.xPos}px`,
            top: `${toy.pos.yPos}px`,
          }}
          className={s.card__image}
          src={`/assets/filters/assets/toys/${toy.toyNumber}.png`}
          alt="toy"
        />
      ))}
    </div>
  );
};

export default FavoriteCards;
