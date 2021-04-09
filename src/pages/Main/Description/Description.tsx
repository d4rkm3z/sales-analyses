import React from 'react';
import { Button, Typography } from 'antd';
import { defineMessages, FormattedMessage } from 'react-intl';
import { PaddingBlock } from 'components/PaddingBlock';

import styles from './Description.module.css';

const { Paragraph } = Typography;

const messages = defineMessages({
  title: {
    id: 'main.describe.title',
    defaultMessage: 'Бесплатный сервис для анализа продаж',
  },
  message: {
    id: 'main.describe.message',
    defaultMessage: `Анализы основаны на принципе Парето: 
    «за большинство возможных результатов отвечает относительно небольшое число причин», 
    также оно известно как правило 20 на 80.`,
  },
  button: {
    id: 'main.describe.button',
    defaultMessage: 'Начать анализ',
  },
});

export const Description: React.FC = () => {
  return (
    <PaddingBlock className={styles.root}>
      <div className={styles.Title}>
        <FormattedMessage {...messages.title} />
      </div>
      <Paragraph type="secondary" className={styles.Paragraph}>
        <span>
          <FormattedMessage {...messages.message} />
        </span>
        <span>
          Оно поможет оптимизировать работу и построить стратегию — в логистике,
          закупках, продажах и маркетинге. Применяется в тайм-менеджменте и
          оценке персонала.
        </span>
      </Paragraph>
      <Button type="primary">
        <FormattedMessage {...messages.button} />
      </Button>
    </PaddingBlock>
  );
};
