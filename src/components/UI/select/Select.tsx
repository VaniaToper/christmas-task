import React from 'react';
import s from './Select.module.scss';
import { IOptions } from '../../../types/ITypes';

interface IProps {
  title: string;
  options: IOptions[];
  onChange: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  valueOpen: string;
  valueClose: string;
  zIndex: string;
}

const Select: React.FC<IProps> = ({
                                    title,
                                    options,
                                    onChange,
                                    setType,
                                    valueClose,
                                    valueOpen,
                                    zIndex,
                                  }) => {
  return (
    <form style={{ zIndex: zIndex }}>
      <ul className={`${s.tickets_type__entrance} ${s.select}`}>
        <li>
          <input type='radio' className={s.select__close}
                 name='tickets_type__entrance' id={valueClose} />
          <span
            className={`${s.select__label} ${s.select__label_placeholder}`}>{title}</span>
        </li>
        <li className={s.select__items}>
          <input type='radio' className={s.select__expand}
                 name='tickets_type__entrance' id={valueOpen} />
          <label className={s.select__close_label}
                 htmlFor={valueClose} />
          <ul className={s.select__options}>
            {options.map((option) => (
              <li key={option.id} className={s.select__option}>
                <input onChange={e => {
                  onChange(e.target.value);
                  setType(option.type);
                }}
                       value={option.value}
                       className={s.select__input}
                       type='radio'
                       name='tickets_type__entrance' id={option.id} />
                <label className={s.select__label}
                       htmlFor={option.id}>{option.title}</label>
              </li>
            ))}


          </ul>
          <label className={s.select__expand_label}
                 htmlFor={valueOpen} />
        </li>
      </ul>
    </form>
  );
};

export default Select;