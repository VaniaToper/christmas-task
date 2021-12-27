import React, { FC, useState } from 'react';
import s from './FilterSelect.module.scss';
import Select from '../UI/select/Select';
import { IOptions } from '../../types/ITypes';

interface IProps {
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setSelectType: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSelect: FC<IProps> = ({ setSelectType, setSort }) => {
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
  );
};

export default FilterSelect;