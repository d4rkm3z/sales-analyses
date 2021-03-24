import React from 'react';
import { Typography } from 'antd';

import styles from './Step.module.css';

interface IProps {
  id: string;
  title: string;
  description: string;
}

const { Text } = Typography;

export const Step: React.FC<IProps> = ({ id, title, description }) => (
  <div className={styles.root}>
    <Text className={styles.Number}>{id}</Text>
    <Text className={styles.Title} strong>
      {title}
    </Text>
    <Text className={styles.Description} type="secondary">
      {description}
    </Text>
  </div>
);
