import React, { FC } from 'react';
import s from './FilterSlider.module.scss';
import Slider from '../UI/slider/Slider';
import ResetButton from '../UI/button/resetButton/ResetButton';
import { ISliderValue } from '../../types/ITypes';

interface IProps {
  setYearValue: React.Dispatch<React.SetStateAction<ISliderValue | number>>;
  countValue: ISliderValue;
  yearValue: ISliderValue;
  setCountValue: React.Dispatch<React.SetStateAction<ISliderValue | number>>;
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterSlider: FC<IProps> = ({
  setYearValue,
  yearValue,
  countValue,
  setCountValue,
  setFilter,
}) => {
  return (
    <div className={s.parameters__sort}>
      <div className={s.parameters__sort_sliders}>
        <Slider
          onChange={setYearValue}
          value={yearValue}
          min={1940}
          max={2020}
        />
        <Slider onChange={setCountValue} value={countValue} min={1} max={12} />
      </div>
      <ResetButton
        resetSliders={{
          year: setYearValue,
          count: setCountValue,
        }}
        resetFilters={setFilter}
      />
    </div>
  );
};

export default FilterSlider;
