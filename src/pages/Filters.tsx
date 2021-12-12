import React, {useState} from 'react';
import FiltersPage from "../components/FiltersPage/FiltersPage";
import data from './data'
interface IProps {
}

const Filters: React.FC<IProps> = () => {
  const [cards, setCards] = useState([])
  return (
    <div>
      <FiltersPage cards={data}/>
    </div>
  );
};

export default Filters;