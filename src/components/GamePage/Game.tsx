import React, { useState } from 'react';
import s from './Game.module.scss';
import Picture from './Picture';
import { TreeContext } from '../../context';
import Settings from './Settings';
import Header from '../Header/Header';
import FavCards from './FavCards';
import data from '../FiltersPage/data';
import { IToyOnTree } from '../../types/ITypes';

const Game = () => {
  const [isSnow, setIsSnow] = useState<boolean>(false);
  const [toysOnTree, setToysOnTree] = useState<IToyOnTree[]>([]);
  const [isHoverTree, setIsHoverTree] = useState<boolean>(false);
  const [isLights, setIsLights] = useState<boolean>(false);
  const [tree, setTree] = useState<string>('tree1');
  const [currentBackground, setCurrentBackground] =
    useState<string>('winter-bg1');
  return (
    <TreeContext.Provider
      value={{
        tree,
        setTree,
        currentBackground,
        setCurrentBackground,
        isSnow,
        setIsSnow,
        isLights,
        setIsLights,
        isHoverTree,
        setIsHoverTree,
        toysOnTree,
        setToysOnTree,
      }}
    >
      <Header />
      <div className={s.game}>
        <Settings />
        <Picture isSnow={isSnow} background={tree} />
        <FavCards data={data} />
      </div>
    </TreeContext.Provider>
  );
};

export default Game;
