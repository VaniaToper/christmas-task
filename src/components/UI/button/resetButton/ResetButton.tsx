import React, { FC } from 'react';
import s from './ResetButton.module.scss';
import { ISliderValue } from '../../../../types/ITypes';

interface IProps {
  resetSliders: {
    year: (e: ISliderValue) => void;
    count: (e: ISliderValue) => void;
  };
  resetFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const ResetButton: FC<IProps> = ({ resetSliders, resetFilters }) => {
  const reset = () => {
    resetSliders.year({ min: 1940, max: 2020 });
    resetSliders.count({ min: 1, max: 12 });
    resetFilters([]);
  };

  return (
    <button className={s.reset__button} onClick={reset}>
      Reset
    </button>
  );
};

export default ResetButton;
