import React from 'react';
import s from './Home.module.scss';
import { Link } from 'react-router-dom';
import button from '../UI/button/baseButton/Button.module.scss';
import Header from '../header/Header';


const Home: React.FC = () => {
  return (
    <div className={s.home}>
      <Header />
      <div className={s.home__ground__wrapper}>
        <div className={`${s.home__ground_left} ${s.home__ground}`} />
        <div className={`${s.home__ground_right} ${s.home__ground}`} />
      </div>
      <div className={`${s.home__tree} ${s.tree1}`} />
      <div className={`${s.home__tree} ${s.tree2}`} />
      <div className={`${s.home__tree} ${s.tree3}`} />
      <div className={s.home__text}>Help grandma with decorating <br /> the
        Christmas tree
      </div>
      <Link className={button.Button} to={'/filters'}>Start</Link>
    </div>
  );
};

export default Home;
