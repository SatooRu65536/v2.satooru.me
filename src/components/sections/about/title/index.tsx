import { ReactElement } from 'react';

import styles from './index.module.scss';

const Title = (): ReactElement => {
  return (
    <div className={styles.title}>
      <img src="/icon.webp" alt="アイコン" className={styles.icon} />
      <h3 className={styles.title}>佐藤さとる</h3>
    </div>
  );
};

export default Title;
