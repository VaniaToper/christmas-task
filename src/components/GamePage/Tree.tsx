import React, { useContext } from 'react';
import s from './Tree.module.scss';
import { TreeContext } from '../../context';

interface IProps {
  background: string;
  isSnow:boolean
}

const Tree: React.FC<IProps> = ({ background, isSnow }) => {
  const {
    currentBackground,
    setCurrentBackground,
  } = useContext(TreeContext);
  const createSnow = (count: number) => {
    return new Array(count).fill(null);
  };
  return (
    <div
      style={{ backgroundImage: 'url(' + require(`../../images/game/${currentBackground}.jpg`).default + ')' }}
      className={s.tree__wrapper}>
      <img draggable={false}
           src={require(`../../images/game/${background}.png`).default}
           alt={'christmas tree'}
           className={s.tree__christmas_tree} />
      {isSnow
        ? createSnow(200).map((snow, index) => (
          <div key={index} className={s.snowflake} />
        )) : ''}
    </div>
  );
};

export default Tree;