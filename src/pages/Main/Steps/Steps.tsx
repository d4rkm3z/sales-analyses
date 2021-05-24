import React from 'react';
import { CommonImg } from 'components/CommonImg';
import { Step } from 'components/Step';

import { stepsList } from './data';

import styles from './Steps.module.css';

interface IProps {}

const getHumanityIndex = (index: number): string => String(++index);

export const Steps: React.FC<IProps> = () => {
  const { image } = stepsList[0];

  return (
    <div className={styles.root}>
      <div className={styles.Demo}>
        <CommonImg
          src={image.src}
          alt={image.alt}
          className={styles.ImageWrapper}
        />
      </div>
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
