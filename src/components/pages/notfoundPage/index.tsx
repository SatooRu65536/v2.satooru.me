import Link from 'next/link';
import { ReactElement } from 'react';

import styles from './index.module.scss';

const NotFoundPage = (): ReactElement => {
  return (
    <Link href="/" className={styles.notfound}>
      <div className={styles.img_wrapper}>
        <img className={styles.penguin} src="/404.svg" alt="404" />
      </div>
      <div className={styles.line_container} />
    </Link>
  );
};

export default NotFoundPage;
