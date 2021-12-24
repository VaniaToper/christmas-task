import React, { FC, useContext } from 'react';
import s from './Picture.module.scss';
import { TreeContext } from '../../context';

interface IProps {
  background: string;
  isSnow: boolean;
}

const Picture:FC<IProps> = ({ background, isSnow }) => {
  const { currentBackground, isLights } = useContext(TreeContext);
  const createArray = (count: number) => {
    return new Array(count).fill(null);
  };
  return (
    <div
      style={{ backgroundImage: 'url(' + require(`../../images/game/${currentBackground}.jpg`).default + ')' }}
      className={s.picture}>
      <div className={s.picture__tree_wrapper}>
        <img draggable={false}
             src={require(`../../images/game/${background}.png`).default}
             alt={'christmas tree'}
             className={s.picture__tree} />
      </div>
      {isSnow
        ? createArray(200).map((snow, index) => (
          <div key={index} className={s.snowflake} />
        )) : ''}

    </div>
  );
};

export default Picture;