import React from 'react';
import { Button, Tag, Typography } from 'antd';
import { CommonImg } from 'components/CommonImg';

import styles from './AnalysisCard.module.css';

const { Text } = Typography;

interface IProps {
  title: string;
  description: string;
  image: { src: string; alt: string };
  disable?: boolean;
  tag?: string;
}

export const AnalysisCard: React.FC<IProps> = ({
  title,
  description,
  image,
  disable,
  tag,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.ContentWrapper}>
        <div className={styles.Title}>
          <span className={styles.Text}>{title}</span>
          {tag && (
            <Tag color="default" className={styles.Tag}>
              {tag}
            </Tag>
          )}
        </div>
        <Text type={'secondary'} className={styles.Description}>
          {description}
        </Text>
        {!disable && <Button type={'primary'}>Начать анализ</Button>}
      </div>

      <CommonImg {...image} className={styles.ImageWrapper} />
    </div>
  );
};
