import React, { FC } from 'react';
import s from './Input.module.scss';

interface IProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  autoFocus: boolean;
}

const Input: FC<IProps> = ({ value, onChange, placeholder, autoFocus }) => {
  return (
    <form className={s.search_box}>
      <input
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={s.input}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type="text"
      />
      <button onClick={() => onChange('')} type="reset" />
    </form>
  );
};

export default Input;