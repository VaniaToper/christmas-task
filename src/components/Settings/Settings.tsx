import React, { useContext, useState } from 'react';
import { ITree } from '../../types/ITypes';
import GameButton from '../UI/button/gameButton/GameButton';
import BackgroundButton from '../UI/button/backgroundButton/BackgroundButton';
import ToggleButton from '../UI/button/toggleButton/ToggleButton';
import { TreeContext } from '../../context';
import s from './Settings.module.scss';

interface IProps {}

const Settings: React.FC<IProps> = () => {
  const { isSnow, setIsSnow } = useContext(TreeContext);
  const { isLights, setIsLights } = useContext(TreeContext);
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
    {
      name: 'winter-bg8',
    },
  ]);
  const [lightsButton] = useState<ITree[]>([
    {
      name: 'light-blue',
    },
    {
      name: 'light-red',
    },
    {
      name: 'light-green',
    },
    {
      name: 'light-yellow',
    },
  ]);
  return (
    <div className={s.settings}>
      <div className={s.settings__tree}>
        {treeButtons.map((button) => (
          <GameButton key={button.name} backgroundTree={button.name} />
        ))}
      </div>
      <div className={s.settings__background}>
        {backgroundButton.map((button) => (
          <BackgroundButton key={button.name} background={button.name} />
        ))}
      </div>
      <ToggleButton name={'snowflake'} onClick={setIsSnow} value={isSnow} />
      {lightsButton.map((button) => (
        <ToggleButton
          name={button.name}
          key={button.name}
          onClick={setIsLights}
          value={isLights}
        />
      ))}
    </div>
  );
};

export default Settings;
