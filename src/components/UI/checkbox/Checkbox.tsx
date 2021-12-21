import React from 'react';
import s from './Checkbox.module.scss';
import sprite from '../../../images/sprite.svg';

interface IProps {
  value: string,
  background?: string
  type: string
  width?: string
  name?: string
  onChange?: React.Dispatch<React.SetStateAction<boolean>>;

}

const Checkbox: React.FC<IProps> = ({
                                      type,
                                      value,
                                      background,
                                      width,
                                      name,
                                      onChange,
                                    }) => {

  return (
    <label className={s.checkbox__container}>
      <input onChange={(e) => onChange ? onChange(e.target.checked) : undefined}
             defaultChecked={type !== 'fav'} value={value} type='checkbox'
             className={s.checkbox__input} />
      {type === 'color' && <span className={s.checkbox__checkmark_color}
                                 style={{ background: background }} />}
      {(type === 'shape' || type === 'size') &&
        <svg className={s.checkbox__checkmark_shape}>
          <use style={{ transform: `scale(${width})` }}
               href={`${sprite}#${name}`} />
        </svg>}
      {type === 'fav' &&
        <span className={s.checkbox__checkmark_fav} />}
    </label>
  );
};

export default Checkbox;