import React, { useContext } from 'react';
import s from './BackgroundButton.module.scss';
import { TreeContext } from '../../../../context';

interface IProps {
  background: string;
}

const BackgroundButton: React.FC<IProps> = ({ background }) => {
  const {
    currentBackground,
    setCurrentBackground,
  } = useContext(TreeContext);
  return (
    <button onClick={() => setCurrentBackground(background)}
            className={s.background__button}
            style={{ backgroundImage: 'url(' + require(`../../../../images/game/${background}.jpg`).default + ')' }} />
  );
};

export default BackgroundButton;