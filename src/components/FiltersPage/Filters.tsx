import React, {useMemo, useState} from 'react';
import Card from "./Card";
import s from './Filters.module.scss'
import FiltersBlock from "./FiltersBlock";

// import data from "../../pages/data";

interface IProps {
  data: any
}

const Filters: React.FC<IProps> = ({data}) => {
  const [cards, setCards] = useState([])
  const [filter, setFilter] = useState([])
  const sortCard = useMemo((): any => {
    return data.filter((card, index) => !filter.includes(card.color))
  }, [filter, cards])
  return (
    <div>
      <header className={s.header}>
        <span className={s.header__title}>Filters</span>
        <FiltersBlock filter={filter} setFilter={setFilter}/>
      </header>
      <div className={s.card__wrapper}>
        {sortCard.map((card, index) => (
          <Card key={index} card={card}/>
        ))}
      </div>
    </div>
  );
};

export default Filters;