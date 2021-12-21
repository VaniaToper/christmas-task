import React, { useMemo, useState } from 'react';
import s from './FiltersBlock.module.scss';
import Checkbox from '../UI/checkbox/Checkbox';
import Button from '../UI/button/baseButton/Button';
import Select from '../UI/select/Select';
import Slider from '../UI/slider/Slider';
import { IYearValue } from '../../types/ICard';

interface IProps {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  yearValue: IYearValue;
  setYearValue: React.Dispatch<React.SetStateAction<IYearValue>>;
  setFav: React.Dispatch<React.SetStateAction<boolean>>;
  fav: boolean;
}


const FiltersBlock: React.FC<IProps> = ({
                                          setFilter,
                                          filter,
                                          setSort,
                                          setYearValue,
                                          yearValue,
                                          setFav,
                                          fav,
                                        }) => {
  const [checkBoxes] = useState({
      colorFilter: [
        {
          value: 'yellow',
          background: '#FFD600',
        },
        {
          value: 'red',
          background: '#BC3F3F',
        },
        {
          value: 'green',
          background: '#4CAF3C',
        },
        {
          value: 'blue',
          background: '#239DC3',
        },
        {
          value: 'white',
          background: '#FFF',
        },
      ],
      shapeFilter: [
        {
          value: 'ball',
          name: 'ball',
        },
        {
          value: 'bell',
          name: 'bell',
        },
        {
          value: 'cone',
          name: 'cone',
        },
        {
          value: 'snowflake',
          name: 'snowflake',
        },
        {
          value: 'toy',
          name: 'toy',
        },
      ],
      sizeFilter: [
        {
          value: 'large',
          name: 'ball2',
          width: '100px',
        },
        {
          value: 'medium',
          name: 'ball2',
          width: '60px',
        },
        {
          value: 'small',
          name: 'ball2',
          width: '30px',
        },
      ],

    },
  );
  const [options] = useState([
    {
      value: 'name',
      title: 'By Letter',
    },
    {
      value: 'year',
      title: 'By Date',
    },
  ]);
  const changeFilter = (checked: Boolean, value: string) => {
    if (!checked) return setFilter([...filter, value]);
    return setFilter(filter.filter((param) => {
      return param !== value;
    }));
  };

  const reset = () => {
  };


  return (
    <div className={s.parameters}>
      <form onChange={(e) => {
        const target = e.target as HTMLInputElement;
        changeFilter(target.checked, target.value);
      }} className={s.parameters__filter}>
        <div className={s.parameters__filter_item}>
          <span>Color</span>
          <div className={s.parameters__filter_color}>
            {checkBoxes.colorFilter.map(item => (
              <Checkbox type={'color'} key={item.value} value={item.value}
                        background={item.background} />
            ))}
          </div>
        </div>
        <div className={s.parameters__filter_item}>
          <span>Shape</span>
          <div className={s.parameters__filter_shape}>
            {checkBoxes.shapeFilter.map(item => (
              <Checkbox type={'shape'} key={item.value} name={item.name}
                        value={item.value} />
            ))}
          </div>
        </div>

        <div className={s.parameters__filter_item}>
          <span>Size</span>
          <div className={s.parameters__filter_size}>
            {checkBoxes.sizeFilter.map(item => (
              <Checkbox type={'size'} value={item.value}
                        width={item.width} key={item.value}
                        name={item.name} />
            ))}
          </div>
        </div>
        <form onChange={(e) => console.log(e.target)}
              className={s.parameters__filter_item}>
          Favorites
          <Checkbox value={'fav'} type={'fav'} />
        </form>
      </form>
      <Select onChange={setSort}
              options={options} title={'Sort By'} />
      <div className={s.parameters__sort}>
        <Slider onChange={setYearValue} value={yearValue} />
        <Slider onChange={setYearValue} value={yearValue} />
        <button className={s.parameters__sort_button} onClick={reset}>Reset</button>

      </div>
    </div>
  );
};

export default FiltersBlock;