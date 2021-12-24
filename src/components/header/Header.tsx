import React, { FC } from 'react';
import s from './Header.module.scss';
import button from '../UI/button/baseButton/Button.module.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <div className={s.header}>
      <ul className={s.header__list}>
        <Link to={'/'}>Home</Link>
        <Link to={'/filters'}>Filters</Link>
        <Link to={'/game'}>Game</Link>
      </ul>
    </div>
  );
};

export default Header;
