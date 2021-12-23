import React, { useContext } from 'react';
import s from './GameButton.module.scss';
import { TreeContext } from '../../../../context';

interface IProps {
  backgroundTree: string;
}

const GameButton: React.FC<IProps> = ({ backgroundTree }) => {
  const { tree, setTree } = useContext(TreeContext);
  return (
    <button onClick={() => setTree(backgroundTree)} className={s.game__button}
            style={{ backgroundImage: 'url(' + require(`../../../../images/game/${backgroundTree}.png`).default + ')' }} />
  );
};

export default GameButton;