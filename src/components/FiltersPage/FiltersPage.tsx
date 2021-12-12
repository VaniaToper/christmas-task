import React from 'react';
import Card from "./Card";
import s from './FiltersPage.module.scss'

interface IProps {
  cards: any
}

const FiltersPage: React.FC<IProps> = ({cards}) => {
  return (
    <div>
      <header className={s.header}>
        <span className={s.header__title}>Filters</span>
      </header>
      <div className={s.card__wrapper}>
        {cards.map((card) => (
          <Card card={card}/>
        ))}
      </div>
    </div>
  );
};

export default FiltersPage;