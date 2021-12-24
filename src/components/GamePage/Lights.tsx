import React from 'react';
import s from './Lights.module.scss';

interface IProps {
  top:number
  mid:number
  bot:number
}

const Lights: React.FC<IProps> = ({top,mid,bot}) => {
  const createArray = (count: number) => {
    return new Array(count).fill(null);
  };
  return (
    <div>
      <div className={`${s.lights} ${s.lights_top}`}>
        {createArray(top).map((light, index) => (
          <li key={index} />
        ))}
      </div>
      <div className={`${s.lights} ${s.lights_medium}`}>
        {createArray(mid).map((light, index) => (
          <li key={index} />
        ))}
      </div>
      <div className={`${s.lights} ${s.lights_bottom}`}>
        {createArray(bot).map((light, index) => (
          <li key={index} />
        ))}
      </div>
    </div>
  );
};

export default Lights;