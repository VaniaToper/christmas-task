import React, { useState } from 'react';
import s from './FiltersBlock.module.scss';
import Checkbox from '../UI/checkbox/Checkbox';

interface IProps {
  filter: string[];
  setFilter: any;
}


const FiltersBlock: React.FC<IProps> = ({ setFilter, filter }) => {
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
          name:'ball2',
          width: '100px',
        },
        {
          value: 'medium',
          name:'ball2',
          width: '60px',
        },
        {
          value: 'small',
          name:'ball2',
          width: '30px',
        },
      ],
    },
  );
  const changeFilter = (checked: Boolean, value: string) => {
    if (!checked) return setFilter([...filter, value]);
    return setFilter(filter.filter((param) => {
      console.log('true');
      return param !== value;
    }));
  };
  return (
    <div>
      <div className={s.parameters}>
        <div className={s.parameters__wrapper}>
          <form onChange={(e) => {
            const target = e.target as HTMLInputElement;
            changeFilter(target.checked, target.value);
          }} className={s.parameters__wrapper}>
            <div className={s.parameters__color}>
              <span>Color</span>
              {checkBoxes.colorFilter.map(item => (
                <Checkbox type={'color'} key={item.value} value={item.value}
                          background={item.background} />
              ))}
            </div>
            <div className={s.parameters__shape}>
              <span>Shape</span>
              {checkBoxes.shapeFilter.map(item => (
                <Checkbox type={'shape'} key={item.value} name={item.name} value={item.value} />
              ))}
            </div>

            <div className={s.parameters__size}>
              <span>Size</span>
              {checkBoxes.sizeFilter.map(item => (
                <Checkbox type={'size'} value={item.value}
                          width={item.width}  key={item.value} name={item.name}/>
              ))}
            </div>

          </form>
          {/*<div className={s.parameters__fav}>*/}
          {/*  Favorites*/}
          {/*  <label className={s.checkbox__container}>*/}
          {/*    <input type='checkbox' className={s.checkbox__input} />*/}
          {/*    <span className={s.checkbox__checkmark_fav} />*/}
          {/*  </label>*/}
          {/*</div>*/}
        </div>

      </div>
    </div>
  );
};

export default FiltersBlock;