import React from 'react';
import { stepsList } from './data';
import { Step } from 'components/Step';

import styles from './Steps.module.css';

interface IProps {}

const getHumanityIndex = (index: number) => String(++index);

export const Steps: React.FC<IProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.Demo}>{stepsList[0].show}</div>
      <div className={styles.List}>
        {stepsList.map(({ id, title, description }, index) => (
          <Step
            key={id}
            id={getHumanityIndex(index).padStart(2, '0')}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
