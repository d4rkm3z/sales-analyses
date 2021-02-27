import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Description } from 'pages/Main/Description';
import { Analyses } from 'pages/Main/Analyses';
import { Faq } from 'pages/Main/Faq';

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
        <Faq />
      </Content>
    </Layout>
  );
};
