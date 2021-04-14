import React, { useCallback, useState } from 'react';
import { Layout } from 'antd';
import { useVScrollListener } from 'hooks/useVScrollListener';
import { HeaderType } from 'pages/Main/enums';

import { Analyses } from './Analyses';
import { AnimatedText } from './AnimatedText';
import { headerItems } from './data';
import { Description } from './Description';
import { Faq } from './Faq';
import { Header } from './Header';
import { Steps } from './Steps';

import styles from './Main.module.css';

interface IProps {}

export const Main: React.FC<IProps> = () => {
  const [verticalOffset, setVerticalOffset] = useState(0);
  const getHeaderType = useCallback(() => {
    return verticalOffset > 60 ? HeaderType.PINNED : HeaderType.DEFAULT;
  }, [verticalOffset]);

  useVScrollListener(setVerticalOffset);

  return (
    <Layout>
      <Header menuItems={headerItems} type={getHeaderType()} />
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
