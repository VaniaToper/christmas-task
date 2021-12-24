import React, { createContext, Dispatch, SetStateAction } from 'react';

interface IFavContext {
  favCards: number[];
  setFavCards: Dispatch<SetStateAction<number[]>>;
}

export const FavContext = createContext({} as IFavContext);
export const TreeContext = createContext(null);
