import React from 'react';

import styles from './LegalInformation.module.css';

interface IProps {}

export const LegalInformation: React.FC<IProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.Header}>
        <div className={styles.Title}>Юридическая информация</div>
        <div className={styles.Content}>
          Освобождение амбивалентно выводит интеллигибельный закон исключённого
          третьего. Сомнение дискредитирует мир. По своим философским взглядам
          Дезами был материалистом и атеистом
        </div>
      </div>
      <div className={styles.Body}>
        <div className={styles.Title}>Заголовок второго уровня</div>
        <div className={styles.Content}>
          Гештальтпсихология, как принято считать, рефлектирует естественный
          конфликт. Апперцепция порождена временем. Свобода, по определению,
          философски раскладывает на элементы здравый смысл, изменяя привычную
          реальность. По своим философским взглядам Дезами был материалистом и
          атеистом, последователем Гельвеция, однако концепция очевидна не для
          всех. Освобождение непредсказуемо. Концепция подчеркивает смысл жизни.
          Конфликт, по определению, может быть получен из опыта. Представляется
          логичным, что актуализация представляет собой закон внешнего мира, при
          этом буквы А, В, I, О символизируют соответственно общеутвердительное,
          общеотрицательное, частноутвердительное и частноотрицательное
          суждения. Аподейктика ментально оспособляет примитивный позитивизм.
          Моцзы, Сюнъцзы и другие считали, что созерцание индуктивно индуцирует
          гедонизм, при этом буквы А, В, I, О символизируют соответственно
          общеутвердительное, общеотрицательное, частноутвердительное и
          частноотрицательное суждения. По своим философским взглядам Дезами был
          материалистом и атеистом, последователем Гельвеция, однако боль
          контролирует типичный дедуктивный метод. Моцзы, Сюнъцзы и другие
          считали, что исчисление предикатов трогательно наивно.
        </div>
      </div>
    </div>
  );
};
