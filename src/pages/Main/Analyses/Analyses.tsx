import React, { createElement } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { AnalysisCard } from 'components/AnalysisCard';
import { PaddingBlock } from 'components/PaddingBlock';
import { ICardItem } from 'pages/Main/types';

import styles from './Analyses.module.css';

interface IProps {
  cards: ICardItem[];
}

const messages = defineMessages({
  title: {
    id: 'main.analyses.title',
    defaultMessage: 'Другие анализы',
  },
});

export const Analyses: React.FC<IProps> = ({ cards }) => {
  return (
    <PaddingBlock>
      <div className={styles.Title}>
        <FormattedMessage {...messages.title} />
      </div>
      <div className={styles.List}>
        {cards.map(({ id, ...props }) =>
          createElement(AnalysisCard, {
            key: id,
            ...props,
          }),
        )}
      </div>
    </PaddingBlock>
  );
};
