import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Layout, Menu } from 'antd';
import classnames from 'classnames';
import { IMenuItem } from 'pages/Main/types';

import styles from './Header.module.css';

interface IProps {
  menuItems: IMenuItem[];
  type: 'default' | 'pinned';
}

export const Header: React.FC<IProps> = ({ menuItems, type }) => {
  return (
    <Layout.Header>
      <Menu
        mode="horizontal"
        className={classnames(styles.root, type === 'pinned' ? styles.Pinned : styles.Scrolled)}
      >
        {menuItems.map(({ id, text }) => (
          <Menu.Item key={id}>{text}</Menu.Item>
        ))}
        <Menu.Item>
          <Button type="primary">
            <FormattedMessage id="header.button.calculating" defaultMessage="Начать анализ" />
          </Button>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
