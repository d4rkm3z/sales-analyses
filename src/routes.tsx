import { About } from 'pages/About';
import { LegalInformation } from 'pages/LegalInformation';
import { IMenuItem } from 'pages/Main/types';

export const routes: IMenuItem[] = [
  {
    id: 1,
    text: 'О сервисе',
    link: '/about',
    component: About,
  },
  {
    id: 2,
    text: 'Как это работает',
    link: '/how-it-work',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    component: () => <></>,
  },
  {
    id: 3,
    text: 'Юридическая информация',
    link: '/legal',
    component: LegalInformation,
  },
  {
    id: 4,
    text: 'Конфиденциальность',
    link: '/privacy',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    component: () => <></>,
  },
];
