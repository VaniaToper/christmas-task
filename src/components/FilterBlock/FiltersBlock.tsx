import React, { FC } from 'react';
import s from './FiltersBlock.module.scss';
import { ISliderValue } from '../../types/ITypes';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import FilterSelect from '../FilterSelect/FilterSelect';
import FilterSlider from '../FilterSlider/FilterSlider';

interface IProps {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  setCountValue: React.Dispatch<React.SetStateAction<ISliderValue | number>>;
  countValue: ISliderValue;
  yearValue: ISliderValue;
  setYearValue: React.Dispatch<React.SetStateAction<ISliderValue | number>>;
  setFav: React.Dispatch<React.SetStateAction<boolean>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
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
  return (
    <div className={s.parameters}>
      <FilterCheckbox setFilter={setFilter} filter={filter} setFav={setFav} />
      <FilterSelect setSelectType={setSelectType} setSort={setSort} />
      <FilterSlider
        setYearValue={setYearValue}
        countValue={countValue}
        yearValue={yearValue}
        setCountValue={setCountValue}
        setFilter={setFilter}
      />
    </div>
  );
};

export default FiltersBlock;