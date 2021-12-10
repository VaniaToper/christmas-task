import React from 'react';
import Button from '../UI/button/Button';
import s from './HomePage.module.scss';

interface IProps {
}

const HomePage: React.FC<IProps> = () => {
    return (
        <div className={s.home}>
            <div className={s.home__ground__wrapper}>
                <div className={[s.home__ground_left, s.home__ground].join(' ')}/>
                <div className={[s.home__ground_right, s.home__ground].join(' ')}/>
            </div>
            <Button>Start</Button>
        </div>
    );
};

export default HomePage;
