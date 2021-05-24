import React from 'react';
import { Typography } from 'antd';
import { Parallax } from 'rc-scroll-anim';

import styles from './AnimatedText.module.css';

interface IProps {
  innerKey: string;
  text: string;
}

const { Text } = Typography;

const combineKeys = (innerKey: string, ...args: string[]): string =>
  [innerKey, ...args].join('-');

export const AnimatedText: React.FC<IProps> = ({ innerKey, text }) => {
  const getKey = combineKeys.bind(null, innerKey);

  return (
    <div className={styles.root}>
      <Parallax
        animation={{
          scale: 1,
          onUpdate: (percent): void => {
            console.log('scale anim percent:', percent);
          },
        }}
        style={{ transform: 'scale(0)', margin: '10px auto' }}
        className="code-box-shape"
      >
        <Text className={styles.Content} strong>
          {text.split('\\n').map((el, index) => (
            <div key={getKey('text', String(index))}>{el}</div>
          ))}
        </Text>
      </Parallax>
    </div>
  );
};
