import React from 'react';
import { Layout } from 'antd';

import { Analyses } from './Analyses';
import { AnimatedText } from './AnimatedText';
import { Description } from './Description';
import { Faq } from './Faq';
import { cardItems } from './StaticData';
import { Steps } from './Steps';

import styles from './Main.module.css';

interface IProps {}

export const Main: React.FC<IProps> = () => {
  return (
    <Layout>
      <Layout.Content className={styles.Content}>
        <Description />
        <Analyses cards={cardItems} />
        <AnimatedText key={1231} innerKey="at-1" text="Как это работает" />
        <Steps />
        <AnimatedText
          key={12}
          innerKey="at-2"
          text="Быстро.Бесплатно.\nТочно."
        />
        <Faq />
      </Layout.Content>
    </Layout>
  );
};
