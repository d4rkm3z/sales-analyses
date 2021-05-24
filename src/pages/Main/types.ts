export interface ICommonImage {
  src: string;
  alt: string;
  width?: string;
}

export interface IMenuItem {
  id: number;
  text: string;
}

export interface ICardItem {
  id: string;
  description: string;
  title: string;
  image: ICommonImage;
  tag?: string;
}
