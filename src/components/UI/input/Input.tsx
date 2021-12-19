import React from 'react';
import s from './Input.module.scss'

interface IProps{
  value:string
  onChange:any
  placeholder?:string
  autoFocus:boolean
}
const Input: React.FC<IProps> = ({value,onChange,placeholder, autoFocus}) => {
  return (
    <input placeholder={placeholder} autoFocus={autoFocus} className={s.input} onChange={onChange} value={value} type='search' />
  );
};

export default Input;