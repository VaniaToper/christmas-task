import React, { FC, Dispatch, SetStateAction } from 'react';
import s from './FiltersBlock.module.scss';
import { ISliderValue } from '../../types/ITypes';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import FilterSelect from '../FilterSelect/FilterSelect';
import FilterSlider from '../FilterSlider/FilterSlider';

interface IProps {
  filter: string[];
  setFilter: Dispatch<SetStateAction<string[]>>;
  setCountValue: (e: ISliderValue) => void;
  countValue: ISliderValue;
  yearValue: ISliderValue;
  setYearValue: (e: ISliderValue) => void;
  setFav: Dispatch<SetStateAction<boolean>>;
  setSort: Dispatch<SetStateAction<string>>;
  setSelectType: Dispatch<SetStateAction<string>>;
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
