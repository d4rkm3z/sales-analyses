import React, { PropsWithChildren, ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import { IntlProvider } from 'react-intl';

export const Providers: React.FC<PropsWithChildren<ReactNode>> = ({
  children,
}) => {
  return (
    <IntlProvider locale="ru" defaultLocale={'ru'}>
      <ConfigProvider locale={ruRU}>{children}</ConfigProvider>
    </IntlProvider>
  );
};
