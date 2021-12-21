import React, { useMemo, useState } from 'react';
import s from './FiltersBlock.module.scss';
import Checkbox from '../UI/checkbox/Checkbox';
import Select from '../UI/select/Select';
import Slider from '../UI/slider/Slider';
import { ISliderValue } from '../../types/ITypes';
import ResetButton from '../UI/button/resetButton/ResetButton';

interface IProps {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  setCountValue: React.Dispatch<React.SetStateAction<ISliderValue>>;
  countValue: ISliderValue;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  yearValue: ISliderValue;
  setYearValue: React.Dispatch<React.SetStateAction<ISliderValue>>;
  setFav: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectType: React.Dispatch<React.SetStateAction<string>>;
}


const FiltersBlock: React.FC<IProps> = ({
                                          setFilter,
                                          filter,
                                          setSort,
                                          setYearValue,
                                          yearValue,
                                          setFav,
                                          countValue,
                                          setCountValue,
                                          setSelectType,
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
      id: '0',
      value: 'name',
      title: 'By Letter',
      type: 'normal',
    },
    {
      id: '1',
      value: 'year',
      title: 'By Date',
      type: 'normal',
    },
  ]);
  const [optionsReverse] = useState([
    {
      id: '3',
      value: 'name',
      title: 'By Letter Reverse',
      type: 'reverse',
    },
    {
      id: '4',
      value: 'year',
      title: 'By Date Reverse',
      type: 'reverse',
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
        <div className={s.parameters__filter_item}>
          Favorites
          <Checkbox onChange={setFav} value={'fav'} type={'fav'} />
        </div>
      </form>
      <div className={s.parameters__selects}>
        <Select zIndex={'5'} setType={setSelectType} valueClose={'close'}
                valueOpen={'open'}
                onChange={setSort}
                options={options} title={'Sort By'} />
        <Select zIndex={'4'} setType={setSelectType} valueClose={'reverseClose'}
                valueOpen={'reverseOpen'}
                onChange={setSort}
                options={optionsReverse} title={'Sort By'} />
      </div>
      <div className={s.parameters__sort}>
        <div className={s.parameters__sort_sliders}>
          <Slider onChange={setYearValue} value={yearValue} min={1940}
                  max={2020} />
          <Slider onChange={setCountValue} value={countValue} min={1} max={12} />
        </div>
        <ResetButton rangeValue={{
          year: setYearValue,
          count: setCountValue,
        }} />
      </div>
    </div>
  );
};

export default FiltersBlock;