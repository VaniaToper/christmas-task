import React, { useContext, useMemo, useState } from 'react';
import s from './Filters.module.scss';
import Card from './Card';
import FiltersBlock from './FiltersBlock';
import { ICards, ISliderValue } from '../../types/ITypes';
import Input from '../UI/input/Input';
import { FavContext } from '../../context';
import Modal from '../UI/modal/Modal';
import Header from '../Header/Header';

interface IProps {
  data: ICards[];
}

const Filters: React.FC<IProps> = ({ data }) => {
  const [select, setSelect] = useState<string>('');
  const [selectType, setSelectType] = useState<string>('');
  const [fav, setFav] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [countValue, setCountValue] = useState<ISliderValue>({
    min: 1,
    max: 12,
  });
  const [yearValue, setYearValue] = useState<ISliderValue>({
    min: 1940,
    max: 2020,
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
  const favCards = useMemo(() => {
    if (fav) {
      setFavorite();
      return data.filter((card) => card.favorite);
    }
    return data;
  }, [fav, data]);
  const filterCards = useMemo(() => {
    return favCards.filter(
      (card, index) =>
        !filter.includes(card.color) &&
        !filter.includes(card.shape) &&
        !filter.includes(card.size),
    );
  }, [filter, favCards]);

  const searchCards = useMemo(() => {
    if (searchQuery)
      return filterCards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    else return filterCards;
  }, [searchQuery, filterCards]);

  const filterByYear = useMemo(() => {
    return searchCards.filter(
      (card) =>
        parseInt(card.year) >= yearValue.min &&
        parseInt(card.year) <= yearValue.max,
    );
  }, [yearValue, searchCards]);

  const filterByCount = useMemo(() => {
    return filterByYear.filter(
      (card) =>
        parseInt(card.count) >= countValue.min &&
        parseInt(card.count) <= countValue.max,
    );
  }, [countValue, filterByYear]);

  const sortCard = useMemo(() => {
    if (selectType === 'normal')
      return [...filterByCount].sort((a, b) =>
        a[select].localeCompare(b[select]),
      );
    if (selectType === 'reverse')
      return [...filterByCount].sort((a, b) =>
        b[select].localeCompare(a[select]),
      );
    return filterByCount;
  }, [select, selectType, filterByCount]);

  return (
    <div>
      <Header />
      <Modal />
      <header className={s.header}>
        <span className={s.header__title}>Filters</span>
        <FiltersBlock
          setSelectType={setSelectType}
          countValue={countValue}
          setCountValue={setCountValue}
          setFav={setFav}
          yearValue={yearValue}
          setYearValue={setYearValue}
          setSort={setSelect}
          filter={filter}
          setFilter={setFilter}
        />
      </header>

      <div className={s.card__wrapper}>
        <Input
          autoFocus={true}
          placeholder={'Search...'}
          value={searchQuery}
          onChange={setSearchQuery}
        />
        {sortCard.length ? (
          sortCard.map((card, index) => (
            <Card value={fav} key={index} onChange={setFav} card={card} />
          ))
        ) : (
          <span>Not Found</span>
        )}
      </div>
    </div>
  );
};

export default Filters;
