import React, { useContext } from 'react';
import s from './Picture.module.scss';
import { TreeContext } from '../../context';
import Lights from '../Lights/Lights';
import 'require-context';
interface IProps {
  background: string;
  isSnow: boolean;
}

const Picture: React.FC<IProps> = ({ background, isSnow }) => {
  const { currentBackground, isLights, setIsHoverTree } =
    useContext(TreeContext);
  const createArray = (count: number) => {
    return new Array(count).fill(null);
  };
  const dragEnter = (e: React.DragEvent<HTMLMapElement>) => {
    e.preventDefault();
  };
  const dragLeave = (e: React.MouseEvent<HTMLMapElement>) => {
    setIsHoverTree(false);
    e.preventDefault();
  };
  const onDrop = (e: React.DragEvent<HTMLMapElement>) => {
    e.preventDefault();
    setIsHoverTree(true);
  };
  const onDropCapture = (e: React.DragEvent<HTMLMapElement>) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        backgroundImage: 'url(' + `/assets/game/${currentBackground}.jpg` + ')',
      }}
      className={s.picture}
    >
      <div className={s.picture__tree_wrapper}>
        <img
          draggable={false}
          src={`/assets/game/${background}.png`}
          alt={'christmas tree'}
          className={s.picture__tree}
          useMap="#workMap"
        />
        {isLights ? <Lights top={4} mid={6} bot={8} /> : ''}
        <map
          onDrop={(e) => onDrop(e)}
          onDropCapture={(e) => onDropCapture(e)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => dragEnter(e)}
          onMouseLeave={(e) => dragLeave(e)}
          name="workMap"
          onClick={() => console.log('click')}
        >
          <area shape="poly" coords="50,450, 260,0, 430,450" alt="tree" />
        </map>
      </div>
      {isSnow
        ? createArray(200).map((snow, index) => (
            <div key={index} className={s.snowflake} />
          ))
        : ''}
    </div>
  );
};

export default Picture;
