import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Layout, Menu } from 'antd';
import { ButtonType } from 'antd/es/button';
import classnames from 'classnames';
import { HeaderType } from 'pages/Main/enums';
import { IMenuItem } from 'pages/Main/types';

import styles from './Header.module.css';

interface IProps {
  menuItems: IMenuItem[];
  type: HeaderType;
}

export const Header: React.FC<IProps> = ({ menuItems, type }) => {
  const [btnType, menuClassName] = useMemo<[ButtonType, string]>(() => {
    return type === HeaderType.PINNED
      ? ['primary', styles.Pinned]
      : ['default', styles.Default];
  }, [type]);

  return (
    <Layout.Header className={classnames(styles.root, menuClassName)}>
      <Menu
        mode="horizontal"
        className={classnames(styles.Menu, menuClassName)}
      >
        {menuItems.map(({ id, text }) => (
          <Menu.Item key={id}>{text}</Menu.Item>
        ))}
        <Menu.Item className={styles.Button}>
          <Button type={btnType}>
            <FormattedMessage
              id="header.button.calculating"
              defaultMessage="Начать анализ"
            />
          </Button>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
