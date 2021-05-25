import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Button, Typography } from 'antd';
import classnames from 'classnames';
import { PaddingBlock } from 'components/PaddingBlock';

import { ReactComponent as LeftBackground } from './images/left.svg';
import { ReactComponent as RightBottomBackground } from './images/right-bottom.svg';
import { ReactComponent as RightTopBackground } from './images/right-top.svg';

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
    «за большинство возможных результатов отвечает относительно небольшое число 
    причин», также оно известно как правило 20 на 80.`,
  },
  button: {
    id: 'main.describe.button',
    defaultMessage: 'Начать анализ',
  },
});

export const Description: React.FC = () => {
  return (
    <PaddingBlock className={styles.root}>
      <div className={classnames(styles.Background, styles.BackgroundLeft)}>
        <LeftBackground />
      </div>
      <div className={classnames(styles.Background, styles.BackgroundRight)}>
        <RightTopBackground />
      </div>
      <div className={classnames(styles.Background, styles.BackgroundRight)}>
        <RightBottomBackground />
      </div>
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
