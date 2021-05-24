import cubeImage from 'pages/Main/Analyses/cardImages/cube.png';
import tubeImage from 'pages/Main/Analyses/cardImages/tube.png';

import { ICardItem, IMenuItem } from './types';

export const headerItems: IMenuItem[] = [
  {
    id: 1,
    text: 'О сервисе',
  },
  {
    id: 2,
    text: 'Как это работает',
  },
  {
    id: 3,
    text: 'Юридическая информация',
  },
  {
    id: 4,
    text: 'Конфиденциальность',
  },
];

export const cardItems: ICardItem[] = [
  {
    id: 'analyses.card.abc',
    description: `Разделение товаров на три категории по степени их значимости. 
      Поможет определить рентабельные продукты, важных клиентов и поставщиков`,
    title: 'АВС анализ',
    image: { src: cubeImage, alt: '', width: '14vw' },
  },
  {
    id: 'analyses.card.xyz',
    description: `Определение стабильности или устойчивости спроса на товары. 
      Поможет определить какие товары обязательно должны быть на складе или 
      прилавке`,
    title: 'XYZ анализ',
    tag: 'скоро появится',
    image: { src: tubeImage, alt: '', width: '18vw' },
  },
];
