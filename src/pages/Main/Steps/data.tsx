import React from 'react';
import { Image } from 'antd';

import step01 from './images/step_01.png';
import step02 from './images/step_02.png';
import step03 from './images/step_03.png';

const BasicImg: React.FC<{ src: string }> = ({ src }) => (
  <Image src={src} alt="loading" preview={false} width={'100%'} />
);

export const stepsList = [
  {
    id: 'step_01',
    title: 'Загрузите файл с данными',
    description: `Подготовьте файл в котором будут категории товаров или товары,
     информация по продажам и прибыли`,
    show: <BasicImg src={step01} />,
  },
  {
    id: 'step_02',
    title: 'Настройте расчёт',
    description: `Выберите столбцы из вашего файла, по которым нужно произвести 
      расчет и определить группы товаров`,
    show: <BasicImg src={step02} />,
  },
  {
    id: 'step_03',
    title: 'Настройте расчёт',
    description: `Выберите столбцы из вашего файла, по которым нужно произвести 
      расчет и определить группы товаров`,
    show: <BasicImg src={step03} />,
  },
];
