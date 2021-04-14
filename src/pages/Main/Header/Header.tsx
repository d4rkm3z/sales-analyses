import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Layout, Menu } from 'antd';
import classnames from 'classnames';
import { HeaderType } from 'pages/Main/enums';
import { IMenuItem } from 'pages/Main/types';

import styles from './Header.module.css';

interface IProps {
  menuItems: IMenuItem[];
  type: HeaderType;
}

export const Header: React.FC<IProps> = ({ menuItems, type }) => {
  const getPinnedType = useMemo(() => {
    return type === HeaderType.DEFAULT ? 'default' : 'primary';
  }, [type]);

  return (
    <Layout.Header
      className={classnames(
        styles.root,
        type === HeaderType.PINNED ? styles.Pinned : styles.Scrolled,
      )}
    >
      <Menu mode="horizontal">
        {menuItems.map(({ id, text }) => (
          <Menu.Item key={id}>{text}</Menu.Item>
        ))}
        <Menu.Item>
          <Button type={getPinnedType}>
            <FormattedMessage id="header.button.calculating" defaultMessage="Начать анализ" />
          </Button>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
