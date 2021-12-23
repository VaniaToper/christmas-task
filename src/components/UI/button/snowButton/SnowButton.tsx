import React, { useContext } from 'react';
import s from './SnowButton.module.scss';
import { TreeContext } from '../../../../context';

const SnowButton = () => {
  const {isSnow, setIsSnow} = useContext(TreeContext);
  return (
    <button onClick={() => setIsSnow(!!!isSnow)} className={s.snow__button} />
  );
};

export default SnowButton;