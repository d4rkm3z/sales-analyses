import React, { ReactElement, ReactNode } from 'react';
import { Collapse, Typography } from 'antd';
import { PaddingBlock } from 'components/PaddingBlock';
import { CollapseIcon, ExpandIcon } from 'pages/Main/Faq/icons';

import styles from './Faq.module.css';

interface IProps {}

const { Panel } = Collapse;
const { Text } = Typography;

const panels = [
  {
    id: 1,
    title: 'Какие знания нужны для проведения анализа?',
    text: `Никаких. Сервис подскажет, что нужно сделат чтобы провести анализ и 
    правильно разобраться в его результатах.`,
  },
  {
    id: 2,
    title: 'Какие знания нужны для проведения анализа?',
    text: `Никаких. Сервис подскажет, что нужно сделат чтобы провести анализ и 
    правильно разобраться в его результатах.`,
  },
  {
    id: 3,
    title: 'Какие знания нужны для проведения анализа?',
    text: `Никаких. Сервис подскажет, что нужно сделат чтобы провести анализ и 
    правильно разобраться в его результатах.`,
  },
];

const PanelTitle = (text: string): ReactElement => (
  <Text className={styles.Header} strong>
    {text}
  </Text>
);

const CollapseExpandIcon = ({ isActive }: { isActive?: boolean }): ReactNode =>
  isActive ? <CollapseIcon /> : <ExpandIcon />;

export const Faq: React.FC<IProps> = () => {
  return (
    <PaddingBlock className={styles.root}>
      <div className={styles.Title}>Остались вопросы?</div>
      <Collapse expandIconPosition={'right'} expandIcon={CollapseExpandIcon} ghost>
        {panels.map(({ id, title, text }) => (
          <Panel className={styles.Panel} key={id} header={PanelTitle(title)}>
            <Text type={'secondary'} className={styles.Content}>
              {text}
            </Text>
          </Panel>
        ))}
      </Collapse>
    </PaddingBlock>
  );
};
