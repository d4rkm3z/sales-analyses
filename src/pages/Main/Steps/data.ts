import step01 from './images/step_01.png';
import step02 from './images/step_02.png';
import step03 from './images/step_03.png';

export const stepsList = [
  {
    id: 'step_01',
    title: 'Загрузите файл с данными',
    description: `Подготовьте файл в котором будут категории товаров или товары,
     информация по продажам и прибыли`,
    image: { src: step01, alt: 'loading' },
  },
  {
    id: 'step_02',
    title: 'Настройте расчёт',
    description: `Выберите столбцы из вашего файла, по которым нужно произвести 
      расчет и определить группы товаров`,
    image: { src: step02, alt: 'loading' },
  },
  {
    id: 'step_03',
    title: 'Настройте расчёт',
    description: `Выберите столбцы из вашего файла, по которым нужно произвести 
      расчет и определить группы товаров`,
    image: { src: step03, alt: 'loading' },
  },
];
