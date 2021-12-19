import React, { useMemo, useState } from 'react';
import s from './Filters.module.scss';
import Card from './Card';
import FiltersBlock from './FiltersBlock';
import { ICard } from '../../types/ICard';
import Input from '../UI/input/Input';
import Select from '../UI/select/Select';


interface IProps {
  data: ICard[];
}

const Filters: React.FC<IProps> = ({ data }) => {
  const [filter, setFilter] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const filterCard = useMemo(() => {
    return data.filter((card, index) => !filter.includes(card.color) && !filter.includes(card.shape) && !filter.includes(card.size));
  }, [filter, data]);
  const searchCard = useMemo(() => {
    return filterCard.filter(card => card.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, filterCard]);
  return (
    <div>
      <header className={s.header}>
        <span className={s.header__title}>Filters</span>
        <FiltersBlock filter={filter} setFilter={setFilter} />
      </header>
      <Input autoFocus={true} placeholder={'Search...'} value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)} />
      <div className={s.card__wrapper}>
        {searchCard.length
          ?searchCard.map((card, index) => (
          <Card key={index} card={card} />))
          :<span>Not Found</span>
        }
      </div>

    </div>
  );
};

export default Filters;