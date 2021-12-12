import React from 'react';
import s from './Card.module.scss'

interface IProps {
  card:{
    num:string
    name:string
    count:string
    year:string
    shape:string
    color:string
    size:string
    favorite:boolean
  }
}

const Card:React.FC<IProps> = ({card}) => {
  return (
    <div className={s.card}>
      <span className={s.card__title}>{card.name}</span>
      <div style={{ backgroundImage: `url(http://localhost:3000/images/filters/assets/toys/${card.num}.png)` }} className={s.card__img}/>
      <div className={s.card__info}>
        <div>Count: {card.count}</div>
        <div>Year: {card.year}</div>
        <div>Shape: {card.shape}</div>
        <div>Color: {card.color}</div>
        <div>Size: {card.size}</div>
        <div>Favorite: {card.favorite}</div>
      </div>
    </div>
  );
};

export default Card;