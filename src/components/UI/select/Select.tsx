import React from 'react';
import s from './Select.module.scss';

interface IProps {
  title: string;
  options: any[];
  onChange: any;
}

const Select: React.FC<IProps> = ({ title, options, onChange}) => {
  return (
    <form>
      <ul className={`${s.tickets_type__entrance} ${s.select}`}>
        <li>
          <input type='radio' className={s.select__close}
                 name='tickets_type__entrance' id='select__close' value='' />
          <span
            className={`${s.select__label} ${s.select__label_placeholder}`}>{title}</span>
        </li>
        <li className={s.select__items}>
          <input type='radio' className={s.select__expand}
                 name='tickets_type__entrance' id='select__open' />
          <label className={s.select__close_label}
                 htmlFor='select__close' />
          <ul className={s.select__options}>
            {options.map((option) => (
              <li key={option.value} className={s.select__option}>
                <input onChange={e=>onChange(e.target.value)} value={option.value}
                       className={s.select__input}
                       type='radio'
                       name='tickets_type__entrance' id={option.value} />
                <label className={s.select__label}
                       htmlFor={option.value}>{option.title}</label>
              </li>
            ))}


          </ul>
          <label className={s.select__expand_label}
                 htmlFor='select__open' />
        </li>
      </ul>
    </form>
  );
};

export default Select;