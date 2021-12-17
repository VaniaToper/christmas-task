import React from 'react';
import s from './Checkbox.module.scss';
import SvgIcons from '../SvgIcons/SvgIcons';


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
      {type === 'shape' && <SvgIcons name={value} color={color} />}
    </label>
  );
};

export default Checkbox;