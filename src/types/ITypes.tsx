import { Dispatch, SetStateAction } from 'react';

export interface ICards {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;

  [key: string]: string | boolean;
}

export type TKeysCards =
  | 'num'
  | 'name'
  | 'count'
  | 'year'
  | 'shape'
  | 'color'
  | 'size';

export interface ISliderValue {
  min: number;
  max: number;
}

export interface IOptions {
  title: string;
  value: string;
  id: string;
  type: string;
}

export interface ITree {
  name: string;
}

export interface IToyOnTree {
  pos: {
    xPos: number;
    yPos: number;
  };
  toyNumber: number;
  id: number;
}

export interface IFavoriteContext {
  favoriteCards: number[];
  setFavoriteCards: Dispatch<SetStateAction<number[]>>;
}

export interface ITreeContext {
  tree: string;
  setTree: Dispatch<SetStateAction<string>>;
  currentBackground: string;
  setCurrentBackground: Dispatch<SetStateAction<string>>;
  isSnow: boolean;
  setIsSnow: Dispatch<SetStateAction<boolean>>;
  isLights: boolean;
  setIsLights: Dispatch<SetStateAction<boolean>>;
  isHoverTree: boolean;
  setIsHoverTree: Dispatch<SetStateAction<boolean>>;
  toysOnTree: IToyOnTree[];
  setToysOnTree: Dispatch<SetStateAction<IToyOnTree[]>>;
}
