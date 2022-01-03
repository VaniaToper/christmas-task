import React, { FC, useContext, useMemo, useState } from 'react';
import s from './Filters.module.scss';
import Card from '../components/Card/Card';
import FiltersBlock from '../components/FilterBlock/FiltersBlock';
import { ICards } from '../types/ITypes';
import Input from '../components/UI/input/Input';
import { FavoriteContext } from '../context';
import Modal from '../components/UI/modal/Modal';
import Header from '../components/Header/Header';

interface IProps {
  data: ICards[];
}

const Filters: FC<IProps> = ({ data }) => {
  const [select, setSelect] = useState<string>('');
  const [selectType, setSelectType] = useState<string>('');
  const [favorite, setFavorite] = useState(false);
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
  const { favoriteCards } = useContext(FavoriteContext);
  const filterFavoriteCards = () => {
    for (let i = 0; i < data.length; i++) {
      data[i].favorite = false;
    }
    for (let i = 0; i < favoriteCards.length; i++) {
      data[favoriteCards[i]].favorite = true;
    }
    return data;
  };
  const getFavoriteCards = useMemo(() => {
    if (favorite) {
      filterFavoriteCards();
      return data.filter((card) => card.favorite);
    }
    return data;
  }, [favorite, data]);
  const filterCards = useMemo(() => {
    return getFavoriteCards.filter(
      (card) =>
        !filter.includes(card.color) &&
        !filter.includes(card.shape) &&
        !filter.includes(card.size),
    );
  }, [filter, getFavoriteCards]);

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

  // debugger;
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
          setFav={setFavorite}
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
            <Card
              value={favorite}
              key={index}
              onChange={setFavorite}
              card={card}
            />
          ))
        ) : (
          <span>Not Found</span>
        )}
      </div>
    </div>
  );
};

export default Filters;
