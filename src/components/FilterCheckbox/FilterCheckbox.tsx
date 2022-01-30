import React, { FC, useState } from 'react';
import s from './FiltersCheckbox.module.scss';
import Checkbox from '../UI/checkbox/Checkbox';

interface IProps {
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  filter: string[];
  setFav: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterCheckbox: FC<IProps> = ({ setFilter, filter, setFav }) => {
  const changeFilter = (checked: boolean, value: string) => {
    if (!checked) return setFilter([...filter, value]);
    return setFilter(
      filter.filter((param) => {
        return param !== value;
      }),
    );
  };
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
  });
  return (
    <form
      onChange={(e) => {
        const target = e.target as HTMLInputElement;
        changeFilter(target.checked, target.value);
      }}
      className={s.parameters__filter}
    >
      <div className={s.parameters__filter_item}>
        <span>Color</span>
        <div className={s.parameters__filter_color}>
          {checkBoxes.colorFilter.map((item) => (
            <Checkbox
              type={'color'}
              key={item.value}
              value={item.value}
              background={item.background}
            />
          ))}
        </div>
      </div>
      <div className={s.parameters__filter_item}>
        <span>Shape</span>
        <div className={s.parameters__filter_shape}>
          {checkBoxes.shapeFilter.map((item) => (
            <Checkbox
              type={'shape'}
              key={item.value}
              name={item.name}
              value={item.value}
            />
          ))}
        </div>
      </div>

      <div className={s.parameters__filter_item}>
        <span>Size</span>
        <div className={s.parameters__filter_size}>
          {checkBoxes.sizeFilter.map((item) => (
            <Checkbox
              type={'size'}
              value={item.value}
              width={item.width}
              key={item.value}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <div className={s.parameters__filter_item}>
        <span>Favorites</span>
        <Checkbox onChange={setFav} value={'fav'} type={'fav'} />
      </div>
    </form>
  );
};

export default FilterCheckbox;
