import React, { FC, useContext, useMemo, useState } from 'react';
import s from './Filters.module.scss';
import Card from '../components/Card/Card';
import FiltersBlock from '../components/FilterBlock/FiltersBlock';
import { ICards, ISliderValue } from '../types/ITypes';
import Input from '../components/UI/input/Input';
import { FavContext } from '../context';
import Modal from '../components/UI/modal/Modal';
import Header from '../components/Header/Header';

interface IProps {
  data: ICards[];
}

const Filters: FC<IProps> = ({ data }) => {
  const [select, setSelect] = useState<string>('');
  const [selectType, setSelectType] = useState<string>('');
  const [fav, setFav] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [countValue, setCountValue] = useState<any>({
    min: 1,
    max: 12,
  });
  const [yearValue, setYearValue] = useState<any>({
    min: 1940,
    max: 2020,
  });
  const { favCards, setFavCards } = useContext(FavContext);
  const setFavorite = () => {
    for (let i = 0; i < data.length; i++) {
      data[i].favorite = false;
    }
    for (let i = 0; i < favCards.length; i++) {
      data[favCards[i]].favorite = true;
    }
    return data;
  };
  const getFavCards = useMemo(() => {
    if (fav) {
      setFavorite();
      return data.filter((card) => card.favorite);
    }
    return data;
  }, [fav, data]);
  const filterCards = useMemo(() => {
    return getFavCards.filter(
      (card, index) =>
        !filter.includes(card.color) &&
        !filter.includes(card.shape) &&
        !filter.includes(card.size),
    );
  }, [filter, getFavCards]);

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
      return [...filterByCount].sort((a: any, b: any) =>
        a[select].localeCompare(b[select]),
      );
    if (selectType === 'reverse')
      return [...filterByCount].sort((a: any, b: any) =>
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
