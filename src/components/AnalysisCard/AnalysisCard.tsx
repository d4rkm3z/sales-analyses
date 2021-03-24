import React, { SVGProps } from 'react';
import { Button, Typography } from 'antd';

import styles from './AnalysisCard.module.css';

const { Text } = Typography;

interface IProps {
  title: string;
  description: string;
  ImageComponent: React.FC<SVGProps<SVGSVGElement>>;
  isStub?: boolean;
  tag?: string;
}

export const AnalysisCard: React.FC<IProps> = ({
  title,
  description,
  ImageComponent,
  isStub,
  tag,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.Title}>{title}</div>
      <Text type={'secondary'} className={styles.Description}>
        {description}
      </Text>
      <div className={styles.ImageWrapper}>
        <ImageComponent className={styles.Image} />
      </div>
      <Button type={'primary'}>Начать анализ</Button>
    </div>
  );
};
