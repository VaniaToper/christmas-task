export interface ICards {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;

  [key: string]: string;
}

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
