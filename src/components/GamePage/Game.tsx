import React, { useState } from 'react';
import s from './Game.module.scss';
import Tree from './Tree';
import { ITree } from '../../types/ITypes';
import GameButton from '../UI/button/gameButton/GameButton';
import { TreeContext } from '../../context';
import BackgroundButton from '../UI/button/backgroundButton/BackgroundButton';
import SnowButton from '../UI/button/snowButton/SnowButton';

const Game = () => {
  const [tree, setTree] = useState<string>('tree1');
  const [currentBackground, setCurrentBackground] = useState<string>('winter-bg1');
  const [treeButtons] = useState<ITree[]>([
    {
      name: 'tree1',
    },
    {
      name: 'tree2',
    },
    {
      name: 'tree3',
    },
    {
      name: 'tree4',
    },
  ]);
  const [backgroundButton] = useState<ITree[]>([
    {
      name: 'winter-bg1',
    },
    {
      name: 'winter-bg2',
    },
    {
      name: 'winter-bg3',
    },
    {
      name: 'winter-bg4',
    },
    {
      name: 'winter-bg5',
    },
    {
      name: 'winter-bg6',
    },
    {
      name: 'winter-bg7',
    },
  ]);
  return (
    <TreeContext.Provider value={{
      tree,
      setTree,
      currentBackground,
      setCurrentBackground,
    }}>
        <div className={s.game}>
          {treeButtons.map(button => (
            <GameButton key={button.name} backgroundTree={button.name} />
          ))}
          {backgroundButton.map(button => (
            <BackgroundButton key={button.name} background={button.name} />
          ))}
          {/*<SnowButton />*/}
          <Tree isSnow={true} background={tree} />
        </div>
    </TreeContext.Provider>
  );
};

export default Game;