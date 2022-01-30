import { createContext } from 'react';
import { IFavoriteContext, ITreeContext } from '../types/ITypes';

export const FavoriteContext = createContext({} as IFavoriteContext);
export const TreeContext = createContext({} as ITreeContext);
