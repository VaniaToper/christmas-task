import React, { useContext, useMemo, useState } from 'react';
import s from './Filters.module.scss';
import Card from './Card';
import FiltersBlock from './FiltersBlock';
import { ICard } from '../../types/ICard';
import Input from '../UI/input/Input';
import { FavContext } from '../../context';

interface IProps {
  data: ICard[];
}

const Filters: React.FC<IProps> = ({ data }) => {
  const [cards, setCards] = useState([]);
  const [select, setSelect] = useState('');
  const [fav, setFav] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [yearValue, setYearValue] = useState({
    min: 1980,
    max: 2010,
  });
  const { isFav, setIsFav } = useContext(FavContext);
  const setFavorite = () => {
    for (let i = 0; i < data.length; i++) {
      data[i].favorite = false;
    }
    for (let i = 0; i < isFav.length; i++) {
      data[isFav[i]].favorite = true;
    }
    return data;
  };
  const favCards = useMemo((): any => {
    if (fav) {
      setFavorite();
      return data.filter(card => card.favorite);
    }
    return data;
  }, [fav, data]);
  const filterCards = useMemo(() => {
    return favCards.filter((card, index) => !filter.includes(card.color) && !filter.includes(card.shape) && !filter.includes(card.size));
  }, [filter, favCards]);

  const searchCards = useMemo(() => {
    if (searchQuery) return filterCards.filter(card => card.name.toLowerCase().includes(searchQuery.toLowerCase()));
    else return filterCards;
  }, [searchQuery, filterCards]);

  const filterByYear = useMemo(() => {
    return searchCards.filter(card => parseInt(card.year) >= 1940);
  }, [yearValue, searchCards]);

  const sortCard = useMemo(() => {
    if (select) return [...filterByYear].sort((a, b) => a[select].localeCompare(b[select]));
    return filterByYear;
  }, [select, filterByYear]);


  return (
    <div>
      <span>Таск не доделан, если можете, то проверьте  пожалуйста на 1 день позже</span>
      <header className={s.header}>
        <span className={s.header__title}>Filters</span>
        <FiltersBlock fav={fav} setFav={setFav} yearValue={yearValue}
                      setYearValue={setYearValue}
                      setSort={setSelect} filter={filter}
                      setFilter={setFilter} />
      </header>

      <div className={s.card__wrapper}>
        <Input autoFocus={true} placeholder={'Search...'} value={searchQuery}
               onChange={setSearchQuery} />
        {sortCard.length
          ? sortCard.map((card, index) => (
            <Card key={index} value={fav} onChange={setFav} card={card} />))
          : <span>Not Found</span>
        }
      </div>
    </div>
  );
};

export default Filters;