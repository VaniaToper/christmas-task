import React, { FC, ReactChild } from 'react';
import s from './Button.module.scss';

interface IProps {
  children?: ReactChild;
}

const Button: FC<IProps> = ({ children }) => {
  return (
    <button className={s.Button}>
      {children}
    </button>
  );
};

export default Button;
