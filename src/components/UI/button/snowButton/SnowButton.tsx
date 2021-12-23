import React from 'react';
import s from './SnowButton.module.scss'
const SnowButton = ({onChange,value}) => {
  return (
    <button onClick={()=>onChange(!!!value)} className={s.snow__button}/>
  );
};

export default SnowButton;