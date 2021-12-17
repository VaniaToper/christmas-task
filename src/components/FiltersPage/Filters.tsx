import React, { useMemo, useState } from 'react';
import s from './Filters.module.scss';
import Card from './Card';
import FiltersBlock from './FiltersBlock';
import { ICard } from '../../types/ICard';



interface IProps {
  data: ICard[];
}

const Filters: React.FC<IProps> = ({ data }) => {
  const [filter, setFilter] = useState<string[]>([]);
  const sortCard = useMemo(() => {
    return data.filter((card, index) => !filter.includes(card.color)&&!filter.includes(card.shape));
  }, [filter, data]);
  return (
    <div>
      <header className={s.header}>
        <span className={s.header__title}>Filters</span>
        <FiltersBlock filter={filter} setFilter={setFilter} />
      </header>
      <div className={s.card__wrapper}>
        {sortCard.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Filters;