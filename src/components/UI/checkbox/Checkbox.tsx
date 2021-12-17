import React from 'react';
import s from './Checkbox.module.scss';


interface IProps {
  value: string,
  background?: string
  props?: any
  type: string
  name?: string
  color?: string
}

const Checkbox: React.FC<IProps> = ({
                                      name,
                                      color,
                                      type,
                                      value,
                                      background,
                                      ...props
                                    }) => {
  return (
    <label className={s.checkbox__container}>
      <input defaultChecked={true} value={value} type='checkbox'
             className={s.checkbox__input} />
      {type === 'color' && <span className={s.checkbox__checkmark_color}
                                 style={{ background: background }} />}
      {type === 'shape' &&
        <svg className={s.checkbox__checkmark_shape}>
          <use href={`http://localhost:3000/images/sprite.svg#${value}`} />
        </svg>}
    </label>
  );
};

export default Checkbox;