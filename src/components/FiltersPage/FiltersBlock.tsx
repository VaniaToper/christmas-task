import React, { FC, useMemo, useState } from 'react';
import s from './FiltersBlock.module.scss';
import Checkbox from '../UI/checkbox/Checkbox';
import Select from '../UI/select/Select';
import Slider from '../UI/slider/Slider';
import { IOptions, ISliderValue } from '../../types/ITypes';
import ResetButton from '../UI/button/resetButton/ResetButton';
import FilterCheckbox from './FilterCheckbox';

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

const FiltersBlock: FC<IProps> = ({
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
  const [options] = useState<IOptions[]>([
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
  const [optionsReverse] = useState<IOptions[]>([
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

  return (
    <div className={s.parameters}>
      <FilterCheckbox setFilter={setFilter} filter={filter} setFav={setFav} />
      <div className={s.parameters__selects}>
        <Select
          zIndex={'5'}
          setType={setSelectType}
          valueClose={'close'}
          valueOpen={'open'}
          onChange={setSort}
          options={options}
          title={'Sort By'}
        />
        <Select
          zIndex={'4'}
          setType={setSelectType}
          valueClose={'reverseClose'}
          valueOpen={'reverseOpen'}
          onChange={setSort}
          options={optionsReverse}
          title={'Sort By'}
        />
      </div>
      <div className={s.parameters__sort}>
        <div className={s.parameters__sort_sliders}>
          <Slider
            onChange={setYearValue}
            value={yearValue}
            min={1940}
            max={2020}
          />
          <Slider
            onChange={setCountValue}
            value={countValue}
            min={1}
            max={12}
          />
        </div>
        <ResetButton
          resetSliders={{
            year: setYearValue,
            count: setCountValue,
          }}
          resetFilters={setFilter}
        />
      </div>
    </div>
  );
};

export default FiltersBlock;
