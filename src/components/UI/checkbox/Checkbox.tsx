import React from 'react';
import s from './Checkbox.module.scss'
const Checkbox = (value: any, styleName:any) => {
  return (
    <label className={s.checkbox__container}>
      <input value={value} type="checkbox"
             className={s.checkbox__input}/>
      <span className={styleName}/>
    </label>
  );
};

export default Checkbox;