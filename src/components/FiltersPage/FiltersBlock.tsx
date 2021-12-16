import React from 'react';
import s from './FiltersBlock.module.scss'

const FiltersBlock = ({setFilter, filter}) => {

  return (
    <div>
      <div className={s.parameters}>
        <div className={s.parameters__wrapper}>
          {/*<label className={s.checkbox__container}>*/}
          {/*  <input checked=true value={'yellow'} type="checkbox"*/}
          {/*         className={s.checkbox__input}/>*/}
          {/*  <span className={s.checkbox__checkmark_shape}/>*/}
          {/*</label>*/}
          {/*<label className={s.checkbox__container}>*/}
          {/*  <input checked=true value={'yellow'} type="checkbox"*/}
          {/*         className={s.checkbox__input}/>*/}
          {/*  <span className={s.checkbox__checkmark_shape}/>*/}
          {/*</label>*/}
        </div>
        <form onChange={(e) => {
          const target = e.target as HTMLInputElement
          if (target.checked as Boolean) return setFilter([...filter, target.value])
          let index = filter.indexOf(target.value)
          return setFilter([filter[index] = undefined, ...filter])
        }} className={s.parameters__wrapper}>
          <span>Color</span>
          <label className={s.checkbox__container}>
            <input defaultChecked value={'yellow'} type="checkbox"
                   className={s.checkbox__input}/>
            <span style={{background: "#FFD600"}}
                  className={s.checkbox__checkmark_color}/>
          </label>
          <label className={s.checkbox__container}>
            <input defaultChecked value={'red'} type="checkbox" className={s.checkbox__input}/>
            <span style={{background: "#BC3F3F"}}
                  className={s.checkbox__checkmark_color}/>
          </label>
          <label className={s.checkbox__container}>
            <input defaultChecked value={'green'} type="checkbox"
                   className={s.checkbox__input}/>
            <span style={{background: "#4CAF3C"}}
                  className={s.checkbox__checkmark_color}/>
          </label>
          <label className={s.checkbox__container}>
            <input defaultChecked value={'blue'} type="checkbox"
                   className={s.checkbox__input}/>
            <span style={{background: "#239DC3"}}
                  className={s.checkbox__checkmark_color}/>
          </label>
          <label className={s.checkbox__container}>
            <input defaultChecked value={'white'} type="checkbox"
                   className={s.checkbox__input}/>
            <span style={{background: "#fff"}}
                  className={s.checkbox__checkmark_color}/>
          </label>
        </form>
        <div className={s.parameters__size}></div>
        <div className={s.parameters__fav}>
          Favorites
          <label className={s.checkbox__container}>
            <input type="checkbox" className={s.checkbox__input}/>
            <span className={s.checkbox__checkmark_fav}/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltersBlock;