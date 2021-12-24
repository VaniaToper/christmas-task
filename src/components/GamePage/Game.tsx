import React, { useState } from 'react';
import s from './Game.module.scss';
import Picture from './Picture';
import { TreeContext } from '../../context';
import Header from '../header/Header';

const Game = () => {
  const [isSnow, setIsSnow] = useState<boolean>(false);
  const [isLights, setIsLights] = useState<boolean>(false);
  const [tree, setTree] = useState<string>('tree1');
  const [currentBackground, setCurrentBackground] = useState<string>('winter-bg1');
  return (
    <TreeContext.Provider value={{
      tree,
      setTree,
      currentBackground,
      setCurrentBackground,
      isSnow,
      setIsSnow,
      isLights,
      setIsLights,
    }}>
      <Header/>
      <div className={s.game}>
        <Picture isSnow={isSnow} background={tree} />
      </div>
    </TreeContext.Provider>
  );
};

export default Game;