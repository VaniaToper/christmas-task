import React from 'react';
import s from './Checkbox.module.scss';


interface IProps {
  value: string,
  background?: string
  props?: any
  type: string
  width?: string
  name?:string
}

const Checkbox: React.FC<IProps> = ({
                                      type,
                                      value,
                                      background,
                                      width,
                                      name,
                                      ...props
                                    }) => {
  return (
    <label className={s.checkbox__container}>
      <input defaultChecked={true} value={value} type='checkbox'
             className={s.checkbox__input} />
      {type === 'color' && <span className={s.checkbox__checkmark_color}
                                 style={{ background: background }} />}
      {(type === 'shape' || type === 'size') &&
        <svg  className={s.checkbox__checkmark_shape}>
          <use style={{ transform: `scale(${width})` }} href={`http://localhost:3000/images/sprite.svg#${name}`} />
        </svg>}
    </label>
  );
};

export default Checkbox;