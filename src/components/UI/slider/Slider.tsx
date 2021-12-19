import React from 'react';
import Nouislider from 'react-nouislider';

const Slider = () => {
  return (
    <Nouislider
      range={{min: 0, max: 200}}
      start={[0, 100]}
      tooltips
    />
  );
};

export default Slider;