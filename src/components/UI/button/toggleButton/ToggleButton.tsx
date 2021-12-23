import React, { useContext } from 'react';
import s from './ToggleButton.module.scss';

interface IProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
  name: string;
}

const ToggleButton: React.FC<IProps> = ({ onClick, value, name }) => {
  return (
    <button onClick={() => onClick(!!!value)}
            style={{ backgroundImage: 'url(' + require(`../../../../images/game/${name}.png`).default + ')' }}
            className={s.toggle__button} />
  );
};

export default ToggleButton;