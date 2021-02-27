import React, { createElement } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { AnalysisCard } from 'components/AnalysisCard';
import { LandingBlock } from 'components/LandingBlock';
import { CubeImage, TubeImage } from './cardImages';

import styles from './Analyses.module.css';

interface IProps {}

const messages = defineMessages({
  title: {
    id: 'main.analyses.title',
    defaultMessage: 'Другие анализы',
  },
});

const cards = [
  {
    id: 'analyses.card.abc',
    description: `Разделение товаров на три категории по степени их значимости. 
      Поможет определить рентабельные продукты, важных клиентов и поставщиков`,
    title: 'АВС анализ',
    ImageComponent: CubeImage,
  },
  {
    id: 'analyses.card.abc',
    description: `Определение стабильности или устойчивости спроса на товары. 
    Поможет определить какие товары обязательно должны быть на складе или прилавке`,
    title: 'XYZ анализ',
    tag: 'скоро появится',
    ImageComponent: TubeImage,
  },
];

export const Analyses: React.FC<IProps> = () => {
  return (
    <LandingBlock>
      <div className={styles.Title}>
        <FormattedMessage {...messages.title} />
      </div>
      <div className={styles.List}>
        {cards.map(({ id, ...props }) =>
          createElement(AnalysisCard, {
            key: id,
            ...props,
          })
        )}
      </div>
    </LandingBlock>
  );
};
