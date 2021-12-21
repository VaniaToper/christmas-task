import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { ISliderValue } from '../../../types/ITypes';

interface IProps {
  onChange: React.Dispatch<React.SetStateAction<ISliderValue|number>>;
  value: ISliderValue;
  min: number;
  max: number;
}

const Slider: React.FC<IProps> = ({ onChange, value, max, min }) => {
  return (
    <InputRange onChange={e => onChange(e)} value={value}
                maxValue={max}
                minValue={min} />
  );
};

export default Slider;