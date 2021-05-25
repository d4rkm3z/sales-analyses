import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Layout, Menu } from 'antd';
import { ButtonType } from 'antd/es/button';
import classnames from 'classnames';
import { HeaderType } from 'pages/Main/enums';
import { IMenuItem } from 'pages/Main/types';

import styles from 'components/Header/Header.module.css';
import { Link } from 'react-router-dom';

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
    <div className={classnames(styles.root, menuClassName)}>
      <Menu
        mode="horizontal"
        className={classnames(styles.Menu, menuClassName)}
      >
        {menuItems.map(({ id, text, link }) => (
          <Menu.Item key={id} className={styles.MenuItem}>
            <Link to={link}>{text}</Link>
          </Menu.Item>
        ))}
        <Menu.Item className={classnames(styles.Button, styles.MenuItem)}>
          <Button type={btnType}>
            <FormattedMessage
              id="header.button.calculating"
              defaultMessage="Начать анализ"
            />
          </Button>
        </Menu.Item>
      </Menu>
    </div>
  );
};
