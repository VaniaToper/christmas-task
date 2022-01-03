import React, { useState } from 'react';
import s from './Game.module.scss';
import Picture from '../components/Picture/Picture';
import { TreeContext } from '../context';
import Settings from '../components/Settings/Settings';
import Header from '../components/Header/Header';
import FavoriteCards from '../components/FavoriteCards/FavoriteCards';
import data from '../assets/data';
import { IToyOnTree } from '../types/ITypes';

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
        <FavoriteCards data={data} />
      </div>
    </TreeContext.Provider>
  );
};

export default Game;
