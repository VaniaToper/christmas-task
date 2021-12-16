import React, {useState} from 'react';
import Filters from "../components/FiltersPage/Filters";
import data from './data'
interface IProps {
}

const FiltersPage: React.FC<IProps> = () => {

  return (
    <div>
      <Filters data={data}/>
    </div>
  );
};

export default FiltersPage;