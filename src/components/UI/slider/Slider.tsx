import React, { FC } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { ISliderValue } from '../../../types/ITypes';

interface IProps {
  onChange: (e: ISliderValue) => void;
  value: ISliderValue;
  min: number;
  max: number;
}

const Slider: FC<IProps> = ({ onChange, value, max, min }) => {
  return (
    <InputRange
      onChange={(e: any) => {
        onChange(e);
        console.log(typeof e);
      }}
      value={value}
      maxValue={max}
      minValue={min}
    />
  );
};

export default Slider;
