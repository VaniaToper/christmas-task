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
    data.forEach((card, index) => {
      if (filter.includes(card.color)) return [data[index] = undefined, ...data]
      console.log()
      return data.push(card)
    });
    return data
  }, [filter, cards])
  const showFavs = useMemo(() => {
    return sortCard
  }, [filter])
  // if (!showFavs.lenght) return <div>oops</div>

  return (
    <div>
      <header className={s.header}>
        <span className={s.header__title}>Filters</span>
        <FiltersBlock filter={filter} setFilter={setFilter}/>
      </header>
      <div className={s.card__wrapper}>
        {showFavs.map((card, index) => (
          <Card key={index} card={card}/>
        ))}
      </div>
    </div>
  );
};

export default Filters;