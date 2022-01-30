import React, { FC } from 'react';
import s from './Checkbox.module.scss';
import sprite from '../../../assets/sprite.svg';

interface IProps {
  value: string;
  background?: string;
  type: string;
  width?: string;
  name?: string;
  onChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox: FC<IProps> = ({
  type,
  value,
  background,
  width,
  name,
  onChange,
}) => {
  const renderInnerMarkup = () => {
    switch (type) {
      case 'color':
        return (
          <span
            className={s.checkbox__checkmark_color}
            style={{ background: background }}
          />
        );
      case 'shape':
      case 'size':
        return (
          <svg className={s.checkbox__checkmark_shape}>
            <use
              style={{ transform: `scale(${width})` }}
              href={`${sprite}#${name}`}
            />
          </svg>
        );
      case 'fav':
        return <span className={s.checkbox__checkmark_fav} />;
    }
  };

  return (
    <label className={s.checkbox__container}>
      <input
        onChange={(e) => (onChange ? onChange(e.target.checked) : undefined)}
        defaultChecked={type !== 'fav'}
        value={value}
        type="checkbox"
        className={s.checkbox__input}
      />
      {renderInnerMarkup()}
    </label>
  );
};

export default Checkbox;
