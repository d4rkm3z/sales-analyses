import React from 'react';
import { Layout } from 'antd';
import { useWindowOffset } from 'hooks/useWindowOffset';

import { Analyses } from './Analyses';
import { AnimatedText } from './AnimatedText';
import { headerItems } from './data';
import { Description } from './Description';
import { Faq } from './Faq';
import { Header } from './Header';
import { Steps } from './Steps';

import styles from './Main.module.css';

interface IProps {}

const isScrolledByVertical = (yOffset: number, startPosition: number): boolean =>
  yOffset > startPosition;

export const Main: React.FC<IProps> = () => {
  const [, yOffset] = useWindowOffset();

  return (
    <Layout>
      <Header
        menuItems={headerItems}
        type={isScrolledByVertical(yOffset, 90) ? 'pinned' : 'default'}
      />
      <Layout.Content className={styles.Content}>
        <Description />
        <Analyses />
        <AnimatedText key={1231} innerKey="at-1" text="Как это работает" />
        <Steps />
        <AnimatedText key={12} innerKey="at-2" text="Быстро.Бесплатно.\nТочно." />
        <Faq />
      </Layout.Content>
    </Layout>
  );
};
