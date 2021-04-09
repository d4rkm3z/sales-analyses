import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Description } from './Description';
import { Analyses } from './Analyses';
import { Faq } from './Faq';
import { Steps } from './Steps';
import { AnimatedText } from './AnimatedText';

import styles from './Main.module.css';

const { Header, Content } = Layout;

interface IProps {}

interface MenuItem {
  id: number;
  text: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    text: 'О сервисе',
  },
  {
    id: 2,
    text: 'Как это работает',
  },
  {
    id: 3,
    text: 'Юридическая информация',
  },
  {
    id: 4,
    text: 'Конфиденциальность',
  },
];

export const Main: React.FC<IProps> = () => {
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal" className={styles.root}>
          {menuItems.map(({ id, text }) => (
            <Menu.Item key={id}>{text}</Menu.Item>
          ))}
          <Menu.Item>
            <Button type="primary">
              <FormattedMessage
                id="header.button.calculating"
                defaultMessage="Начать анализ"
              />
            </Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.Content}>
        <Description />
        <Analyses />
        <AnimatedText key={1231} innerKey="at-1" text="Как это работает" />
        <Steps />
        <AnimatedText
          key={12}
          innerKey="at-2"
          text="Быстро.Бесплатно.\nТочно."
        />
        <Faq />
      </Content>
    </Layout>
  );
};
