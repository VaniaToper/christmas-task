import React from 'react';
import s from './Checkbox.module.scss'

interface IProps {
  value: string,
  color: string
  props?:any
}

const Checkbox: React.FC<IProps> = ({value, color, ...props}) => {
  return (
    <label className={s.checkbox__container}>
      <input defaultChecked={true} value={value} type="checkbox"
             className={s.checkbox__input}/>
      <span className={s.checkbox__checkmark} style={{background: color}}/>
    </label>
  );
};

export default Checkbox;