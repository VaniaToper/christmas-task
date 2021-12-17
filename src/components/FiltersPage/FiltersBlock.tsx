import React from 'react';
import s from './FiltersBlock.module.scss'
import Checkbox from "../UI/checkbox/Checkbox";

const FiltersBlock = ({setFilter, filter}) => {
  let Checkboxes = {
    colorFilter: [
      {
        value: 'yellow',
        color: '#FFD600'
      },
      {
        value: 'red',
        color: '#BC3F3F'
      },
      {
        value: 'green',
        color: '#4CAF3C'
      },
      {
        value: 'blue',
        color: '#239DC3'
      },
      {
        value: 'white',
        color: '#FFF'
      },
    ]
  }
  return (
    <div>
      <div className={s.parameters}>
        <div className={s.parameters__wrapper}>
        </div>
        <form onChange={(e) => {
          const target = e.target as HTMLInputElement
          if (!target.checked as Boolean) return setFilter([...filter, target.value])
          return setFilter([...filter].filter((param,index)=>{
            return filter[index]!==target.value
          }))
        }} className={s.parameters__wrapper}>
          <span>Color</span>
          {Checkboxes.colorFilter.map(item => (
            <Checkbox  key={item.value} value={item.value} color={item.color} />
          ))}
        </form>
        <div className={s.parameters__size}></div>
        <div className={s.parameters__fav}>
          Favorites
          <label className={s.checkbox__container}>
            <input type="checkbox" className={s.checkbox__input}/>
            <span className={s.checkbox__checkmark_fav}/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltersBlock;