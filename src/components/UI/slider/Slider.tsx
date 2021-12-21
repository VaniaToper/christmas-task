import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Slider = ({onChange, value}) => {
  return (
    <InputRange onChange={e => onChange({ value: e })} value={value} maxValue={2020}
                minValue={1940} />
  );
};

export default Slider;