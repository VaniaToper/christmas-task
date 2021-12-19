import React from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const Slider = () => {
  return (
    <Nouislider
      start={20}
      range={{
        min: 0,
        max: 100
      }}
    />
  );
};

export default Slider;