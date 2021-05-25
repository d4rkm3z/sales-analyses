import React from 'react';

export interface ICommonImage {
  src: string;
  alt: string;
  width?: string;
}

export interface IMenuItem {
  id: number;
  text: string;
  link: string;
  component: React.FC;
}

export interface ICardItem {
  id: string;
  description: string;
  title: string;
  image: ICommonImage;
  tag?: string;
}
