export interface ICards {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
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

export interface IToyOnTree {
  isFav: boolean;
  pos: {
    xPos: number;
    yPos: number;
  };
  toyNumber: number;
  id: number;
}
